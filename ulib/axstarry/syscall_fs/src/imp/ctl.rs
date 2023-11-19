//! 对文件系统的管理，包括目录项的创建、文件权限设置等内容
use axfs::api::{OpenFlags, Permissions};
use axlog::{debug, error, info};
use core::{mem::transmute, ptr::copy_nonoverlapping};

use axhal::mem::VirtAddr;
use axprocess::{
    current_process,
    link::{deal_with_path, FilePath, AT_FDCWD},
};
use syscall_utils::{DirEnt, DirEntType, Fcntl64Cmd, SyscallError, SyscallResult, TimeSecs};

use crate::{ctype::file::new_fd, FileDesc};

extern crate alloc;
use alloc::string::ToString;

/// 功能：获取当前工作目录；
/// 输入：
///     - char *buf：一块缓存区，用于保存当前工作目录的字符串。当buf设为NULL，由系统来分配缓存区。
///     - size：buf缓存区的大小。
/// 返回值：成功执行，则返回当前工作目录的字符串的指针。失败，则返回NULL。
///  暂时：成功执行，则返回当前工作目录的字符串的指针 as isize。失败，则返回0。
///
/// 注意：当前写法存在问题，cwd应当是各个进程独立的，而这里修改的是整个fs的目录
pub fn syscall_getcwd(buf: *mut u8, len: usize) -> SyscallResult {
    debug!("Into syscall_getcwd. buf: {}, len: {}", buf as usize, len);
    let cwd = axfs::api::current_dir().unwrap();

    // todo: 如果buf为NULL,则系统分配缓存区
    // let process = current_process();
    // let process_inner = process.inner.lock();
    // if buf.is_null() {
    //     buf = allocate_buffer(cwd.len());   // 分配缓存区 allocate_buffer
    // }

    let cwd = cwd.as_bytes();

    return if len >= cwd.len() {
        let process = current_process();
        let start: VirtAddr = (buf as usize).into();
        let end = start + len;
        if process.manual_alloc_range_for_lazy(start, end).is_ok() {
            unsafe {
                core::ptr::copy_nonoverlapping(cwd.as_ptr(), buf, cwd.len());
            }
            Ok(buf as isize)
        } else {
            // ErrorNo::EINVAL as isize
            Err(SyscallError::EINVAL)
        }
    } else {
        debug!("getcwd: buf size is too small");
        Err(SyscallError::ERANGE)
    };
}

/// 功能：创建目录；
/// 输入：
///     - dirfd：要创建的目录所在的目录的文件描述符。
///     - path：要创建的目录的名称。如果path是相对路径，则它是相对于dirfd目录而言的。如果path是相对路径，且dirfd的值为AT_FDCWD，则它是相对于当前路径而言的。如果path是绝对路径，则dirfd被忽略。
///     - mode：文件的所有权描述。详见`man 7 inode `。
/// 返回值：成功执行，返回0。失败，返回-1。
pub fn syscall_mkdirat(dir_fd: usize, path: *const u8, mode: u32) -> SyscallResult {
    // info!("signal module: {:?}", process_inner.signal_module.keys());
    let path = if let Some(path) = deal_with_path(dir_fd, Some(path), true) {
        path
    } else {
        return Err(SyscallError::EINVAL);
    };
    debug!(
        "Into syscall_mkdirat. dirfd: {}, path: {:?}, mode: {}",
        dir_fd,
        path.path(),
        mode
    );
    if axfs::api::path_exists(path.path()) {
        // 文件已存在
        return Err(SyscallError::EEXIST);
    }
    let _ = axfs::api::create_dir(path.path());
    // 只要文件夹存在就返回0
    if axfs::api::path_exists(path.path()) {
        Ok(0)
    } else {
        Err(SyscallError::EPERM)
    }
}

/// 功能：切换工作目录；
/// 输入：
///     - path：需要切换到的目录。
/// 返回值：成功执行，返回0。失败，返回-1。
pub fn syscall_chdir(path: *const u8) -> SyscallResult {
    // 从path中读取字符串
    let path = if let Some(path) = deal_with_path(AT_FDCWD, Some(path), true) {
        path
    } else {
        return Err(SyscallError::EINVAL);
    };
    debug!("Into syscall_chdir. path: {:?}", path.path());
    match axfs::api::set_current_dir(path.path()) {
        Ok(_) => Ok(0),
        Err(_) => Err(SyscallError::EINVAL),
    }
}

/// 功能：获取目录的条目;
/// 参数：
///     -fd：所要读取目录的文件描述符。
///     -buf：一个缓存区，用于保存所读取目录的信息。缓存区的结构如下
///     -len：buf的大小。
/// 返回值：成功执行，返回读取的字节数。当到目录结尾，则返回0。失败，则返回-1。
///  struct dirent {
///      uint64 d_ino;	// 索引结点号
///      int64 d_off;	// 到下一个dirent的偏移
///      unsigned short d_reclen;	// 当前dirent的长度
///      unsigned char d_type;	// 文件类型 0:
///      char d_name[];	//文件名
///  };
///  1. 内存布局：
///       0x61fef8
///       0x61fef8 0x61ff00 0x61ff08 0x61ff0a 0x61ff0b
///       实测结果在我的电脑上是这样的，没有按最大对齐方式8字节对齐
///  2. d_off 和 d_reclen 同时存在的原因：
///       不同的dirent可以不按照顺序紧密排列
pub fn syscall_getdents64(fd: usize, buf: *mut u8, len: usize) -> SyscallResult {
    let path = if let Some(path) = deal_with_path(fd, None, true) {
        path
    } else {
        return Err(SyscallError::EINVAL);
    };

    let process = current_process();
    // 注意是否分配地址
    let start: VirtAddr = (buf as usize).into();
    let end = start + len;
    if process.manual_alloc_range_for_lazy(start, end).is_err() {
        return Err(SyscallError::EFAULT);
    }

    if len < DirEnt::fixed_size() {
        return Err(SyscallError::EINVAL);
    }
    // let entry_id_from = unsafe { (*(buf as *const DirEnt)).d_off };
    // error!("entry_id_from: {}", entry_id_from);
    // 先获取buffer里面最后一个长度
    let mut all_offset = 0; // 记录上一次调用时进行到的目录项距离文件夹开始时的偏移量
    let mut buf_offset = 0; // 记录当前buf里面的目录项的指针偏移量
    loop {
        let dir_ent = unsafe { *(buf.add(buf_offset) as *const DirEnt) };
        if dir_ent.d_reclen == 0 || dir_ent.d_off == u64::MAX {
            break;
        }
        buf_offset += dir_ent.d_reclen as usize;
        all_offset = dir_ent.d_off; // 记录最新的 offset
        if buf_offset + DirEnt::fixed_size() >= len {
            break;
        }
    }
    let buf = unsafe { core::slice::from_raw_parts_mut(buf, len) };
    let dir_iter = axfs::api::read_dir(path.path()).unwrap();
    let mut count = 0; // buf中已经写入的字节数

    let mut offset: u64 = 0; // 当前目录项在文件夹中的偏移

    for (_, entry) in dir_iter.enumerate() {
        let entry = entry.unwrap();
        let mut name = entry.file_name();
        name.push('\0');
        let name = name.as_bytes();
        let name_len = name.len();
        let file_type = entry.file_type();
        let entry_size = DirEnt::fixed_size() + name_len + 1;

        // 最后一项给一个 off = -1, reclen = 0 的空文件，
        // 方便下次 getdents64 调用时内核检查上次读到哪了
        // 需要最后留够 empty_entry_size 的空间给它
        let empty_entry_size = DirEnt::fixed_size() + 1;
        // buf不够大，不能再装这个 entry 了
        if count + entry_size + empty_entry_size > len {
            debug!("buf not big enough");
            // 装最后一个空 entry，它是下次调用时给内核看的，不在 count 里
            let dirent: &mut DirEnt = unsafe { transmute(buf.as_mut_ptr().offset(count as isize)) };
            dirent.set_fixed_part(1, u64::MAX, 0, DirEntType::UNKNOWN);
            return Ok(count as isize);
        }
        offset += entry_size as u64;
        // 如果当前这一项已经被输出过了，就继续找下一项
        if offset <= all_offset as u64 {
            continue;
        }

        // 转换为DirEnt
        let dirent: &mut DirEnt = unsafe { transmute(buf.as_mut_ptr().offset(count as isize)) };
        // 设置定长部分
        if file_type.is_dir() {
            dirent.set_fixed_part(1, offset, entry_size, DirEntType::DIR);
        } else if file_type.is_file() {
            dirent.set_fixed_part(1, offset, entry_size, DirEntType::REG);
        } else {
            dirent.set_fixed_part(1, offset, entry_size, DirEntType::UNKNOWN);
        }

        // 写入文件名
        unsafe { copy_nonoverlapping(name.as_ptr(), dirent.d_name.as_mut_ptr(), name_len) };

        count += entry_size;
    }
    Ok(count as isize)
}

// LAB3 你可能用到的函数
use axfs::api::{path_exists, metadata, remove_dir, remove_file, rename};
// LAB3 你可能用到的标志位。
// 它们其实应该放在 ulib/axstarry/syscall_utils/src/ctypes.rs 更合理，但为了方便实验就堆在这了
use bitflags::bitflags;
bitflags! {
    /// sys_renameat2 用到的标志位
    pub struct RenameFlags: u32 {
        const NONE = 0;
        // LAB3 其他可能的选项都有什么？
    }
}

/// 276
/// 重命名文件或目录
// LAB3 你需要完成这个 syscall
pub fn syscall_renameat2(
    old_dirfd: usize,
    old_path: *const u8,
    new_dirfd: usize,
    new_path: *const u8,
    flags: usize,
) -> SyscallResult {
    let old_path = deal_with_path(old_dirfd, Some(old_path), false).unwrap();
    let new_path = deal_with_path(new_dirfd, Some(new_path), false).unwrap();
    let proc_path = FilePath::new("/proc").unwrap();
    if old_path.start_with(&proc_path) || new_path.start_with(&proc_path) {
        return Err(SyscallError::EPERM);
    }
    // LAB3 从此处往上的代码不需要修改
    //
    // HINT 1
    // path_exists, metadata, remove_dir, remove_file, rename 函数的输入参数都是 &str，
    // 你可以通过 old_path.path() new_path.path() 获取它俩的 &str 形式。
    //
    // HINT 2
    // RenameFlags 是一个 bitflags，它常用的函数有 .contains(...) 和 ::from_bits(...)
    // 可以找找内核中其他地方是怎么使用 bitflags 的，比如这个文件中的 syscall_fcntl64
    //
    // HINT 3
    // metadata(old_path.path()) 会返回一个 Result<Metadata>
    // 如果它是 Err()，说明文件打开失败，你可以用它检查文件是否存在；
    // 如果它是 Ok()，则可以获取到一个 Metadata 类。
    // 这个类里 .is_dir() 和 .is_file() 可以帮助你判断它是路径还是文件
    return Err(SyscallError::EPERM);
}


pub fn syscall_fcntl64(fd: usize, cmd: usize, arg: usize) -> SyscallResult {
    let process = current_process();
    let mut fd_table = process.fd_manager.fd_table.lock();

    if fd >= fd_table.len() {
        debug!("fd {} is out of range", fd);
        return Err(SyscallError::EBADF);
    }
    if fd_table[fd].is_none() {
        debug!("fd {} is none", fd);
        return Err(SyscallError::EBADF);
    }
    let file = fd_table[fd].clone().unwrap();
    info!("fd: {}, cmd: {}", fd, cmd);
    match Fcntl64Cmd::try_from(cmd) {
        Ok(Fcntl64Cmd::F_DUPFD) => {
            let new_fd = if let Ok(fd) = process.alloc_fd(&mut fd_table) {
                fd
            } else {
                // 文件描述符达到上限了
                return Err(SyscallError::EMFILE);
            };
            fd_table[new_fd] = fd_table[fd].clone();
            return Ok(new_fd as isize);
        }
        Ok(Fcntl64Cmd::F_GETFD) => {
            if file.get_status().contains(OpenFlags::CLOEXEC) {
                Ok(1)
            } else {
                Ok(0)
            }
        }
        Ok(Fcntl64Cmd::F_SETFD) => {
            if file.set_close_on_exec((arg & 1) != 0) {
                Ok(0)
            } else {
                Err(SyscallError::EINVAL)
            }
        }
        Ok(Fcntl64Cmd::F_GETFL) => Ok(file.get_status().bits() as isize),
        Ok(Fcntl64Cmd::F_SETFL) => {
            if let Some(flags) = OpenFlags::from_bits(arg as u32) {
                if file.set_status(flags) {
                    return Ok(0);
                }
            }
            Err(SyscallError::EINVAL)
        }
        Ok(Fcntl64Cmd::F_DUPFD_CLOEXEC) => {
            let new_fd = if let Ok(fd) = process.alloc_fd(&mut fd_table) {
                fd
            } else {
                // 文件描述符达到上限了
                return Err(SyscallError::EMFILE);
            };

            if file.set_close_on_exec((arg & 1) != 0) {
                fd_table[new_fd] = fd_table[fd].clone();
                return Ok(new_fd as isize);
            } else {
                return Err(SyscallError::EINVAL);
            }
        }
        _ => Err(SyscallError::EINVAL),
    }
}

/// 29
/// 执行各种设备相关的控制功能
/// todo: 未实现
pub fn syscall_ioctl(fd: usize, request: usize, argp: *mut usize) -> SyscallResult {
    let process = current_process();
    let fd_table = process.fd_manager.fd_table.lock();
    info!("fd: {}, request: {}, argp: {}", fd, request, argp as usize);
    if fd >= fd_table.len() {
        debug!("fd {} is out of range", fd);
        return Err(SyscallError::EBADF);
    }
    if fd_table[fd].is_none() {
        debug!("fd {} is none", fd);
        return Err(SyscallError::EBADF);
    }
    if process
        .manual_alloc_for_lazy((argp as usize).into())
        .is_err()
    {
        return Err(SyscallError::EFAULT); // 地址不合法
    }

    let file = fd_table[fd].clone().unwrap();
    // if file.lock().ioctl(request, argp as usize).is_err() {
    //     return -1;
    // }
    let _ = file.ioctl(request, argp as usize);
    Ok(0)
}

/// 53
/// 修改文件权限
/// mode: 0o777, 3位八进制数字
/// path为相对路径：
///     1. 若dir_fd为AT_FDCWD，则相对于当前工作目录
///     2. 若dir_fd为AT_FDCWD以外的值，则相对于dir_fd所指的目录
/// path为绝对路径：
///     忽视dir_fd，直接根据path访问
pub fn syscall_fchmodat(dir_fd: usize, path: *const u8, mode: usize) -> SyscallResult {
    let file_path = deal_with_path(dir_fd, Some(path), false).unwrap();
    axfs::api::metadata(file_path.path())
        .map(|mut metadata| {
            metadata.set_permissions(Permissions::from_bits_truncate(mode as u16));
            Ok(0)
        })
        .unwrap_or_else(|_| Err(SyscallError::ENOENT))
}

/// 48
/// 获取文件权限
/// 类似上面的fchmodat
///        The mode specifies the accessibility check(s) to be performed,
///        and is either the value F_OK, or a mask consisting of the bitwise
///        OR of one or more of R_OK, W_OK, and X_OK.  F_OK tests for the
///        existence of the file.  R_OK, W_OK, and X_OK test whether the
///        file exists and grants read, write, and execute permissions,
///        respectively.
/// 0: F_OK, 1: X_OK, 2: W_OK, 4: R_OK
pub fn syscall_faccessat(dir_fd: usize, path: *const u8, mode: usize) -> SyscallResult {
    // todo: 有问题，实际上需要考虑当前进程对应的用户UID和文件拥有者之间的关系
    // 现在一律当作root用户处理
    let file_path = deal_with_path(dir_fd, Some(path), false).unwrap();
    axfs::api::metadata(file_path.path())
        .map(|metadata| {
            if mode == 0 {
                //F_OK
                // 文件存在返回0，不存在返回-1
                if axfs::api::path_exists(file_path.path()) {
                    Ok(0)
                } else {
                    Err(SyscallError::ENOENT)
                }
            } else {
                // 逐位对比
                let mut ret = true;
                if mode & 1 != 0 {
                    // X_OK
                    ret &= metadata.permissions().contains(Permissions::OWNER_EXEC)
                }
                if mode & 2 != 0 {
                    // W_OK
                    ret &= metadata.permissions().contains(Permissions::OWNER_WRITE)
                }
                if mode & 4 != 0 {
                    // R_OK
                    ret &= metadata.permissions().contains(Permissions::OWNER_READ)
                }
                Ok(ret as isize - 1)
            }
        })
        .unwrap_or_else(|_| Err(SyscallError::ENOENT))
}

/// 88
/// 用于修改文件或目录的时间戳(timestamp)
/// 如果 fir_fd < 0，它和 path 共同决定要找的文件；
/// 如果 fir_fd >=0，它就是文件对应的 fd
pub fn syscall_utimensat(
    dir_fd: usize,
    path: *const u8,
    times: *const TimeSecs,
    _flags: usize,
) -> SyscallResult {
    let process = current_process();
    // info!("dir_fd: {}, path: {}", dir_fd as usize, path as usize);
    if dir_fd != AT_FDCWD && (dir_fd as isize) < 0 {
        return Err(SyscallError::EBADF); // 错误的文件描述符
    }

    if dir_fd == AT_FDCWD
        && process
            .manual_alloc_for_lazy((path as usize).into())
            .is_err()
    {
        return Err(SyscallError::EFAULT); // 地址不合法
    }
    // 需要设置的时间
    let (new_atime, new_mtime) = if times.is_null() {
        (TimeSecs::now(), TimeSecs::now())
    } else {
        if process.manual_alloc_type_for_lazy(times).is_err() {
            return Err(SyscallError::EFAULT);
        }
        unsafe { (*times, *(times.add(1))) } //  注意传入的TimeVal中 sec和nsec都是usize, 但TimeValue中nsec是u32
    };
    // 感觉以下仿照maturin的实现不太合理，并没有真的把时间写给文件，只是写给了一个新建的临时的fd
    if (dir_fd as isize) > 0 {
        // let file = process_inner.fd_manager.fd_table[dir_fd].clone();
        // if !file.unwrap().lock().set_time(new_atime, new_mtime) {
        //     error!("Set time failed: unknown reason.");
        //     return ErrorNo::EPERM as isize;
        // }
        let fd_table = process.fd_manager.fd_table.lock();
        if dir_fd > fd_table.len() || fd_table[dir_fd].is_none() {
            return Err(SyscallError::EBADF);
        }
        if let Some(file) = fd_table[dir_fd].as_ref() {
            if let Some(fat_file) = file.as_any().downcast_ref::<FileDesc>() {
                // if !fat_file.set_time(new_atime, new_mtime) {
                //     error!("Set time failed: unknown reason.");
                //     return ErrorNo::EPERM as isize;
                // }
                fat_file.stat.lock().atime.set_as_utime(&new_atime);
                fat_file.stat.lock().mtime.set_as_utime(&new_mtime);
            } else {
                return Err(SyscallError::EPERM);
            }
        }
        Ok(0)
    } else {
        let file_path = deal_with_path(dir_fd, Some(path), false).unwrap();
        if !axfs::api::path_exists(file_path.path()) {
            error!("Set time failed: file {} doesn't exist!", file_path.path());
            if !axfs::api::path_exists(file_path.dir().unwrap()) {
                return Err(SyscallError::ENOTDIR);
            } else {
                return Err(SyscallError::ENOENT);
            }
        }
        let file = new_fd(file_path.path().to_string(), 0.into()).unwrap();
        file.stat.lock().atime.set_as_utime(&new_atime);
        file.stat.lock().mtime.set_as_utime(&new_mtime);
        Ok(0)
    }
}