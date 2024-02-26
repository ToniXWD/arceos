(function() {var implementors = {
"allocator":[["impl&lt;const PAGE_SIZE: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; Freeze for <a class=\"struct\" href=\"allocator/struct.BitmapPageAllocator.html\" title=\"struct allocator::BitmapPageAllocator\">BitmapPageAllocator</a>&lt;PAGE_SIZE&gt;",1,["allocator::bitmap::BitmapPageAllocator"]],["impl Freeze for <a class=\"struct\" href=\"allocator/struct.BuddyByteAllocator.html\" title=\"struct allocator::BuddyByteAllocator\">BuddyByteAllocator</a>",1,["allocator::buddy::BuddyByteAllocator"]],["impl Freeze for <a class=\"struct\" href=\"allocator/struct.SlabByteAllocator.html\" title=\"struct allocator::SlabByteAllocator\">SlabByteAllocator</a>",1,["allocator::slab::SlabByteAllocator"]],["impl Freeze for <a class=\"struct\" href=\"allocator/struct.TlsfByteAllocator.html\" title=\"struct allocator::TlsfByteAllocator\">TlsfByteAllocator</a>",1,["allocator::tlsf::TlsfByteAllocator"]],["impl&lt;A&gt; Freeze for <a class=\"struct\" href=\"allocator/struct.AllocatorRc.html\" title=\"struct allocator::AllocatorRc\">AllocatorRc</a>&lt;A&gt;",1,["allocator::allocator_api::AllocatorRc"]],["impl Freeze for <a class=\"enum\" href=\"allocator/enum.AllocError.html\" title=\"enum allocator::AllocError\">AllocError</a>",1,["allocator::AllocError"]]],
"arceos_api":[["impl Freeze for <a class=\"struct\" href=\"arceos_api/task/struct.AxTaskHandle.html\" title=\"struct arceos_api::task::AxTaskHandle\">AxTaskHandle</a>",1,["arceos_api::imp::task::AxTaskHandle"]],["impl !Freeze for <a class=\"struct\" href=\"arceos_api/task/struct.AxWaitQueueHandle.html\" title=\"struct arceos_api::task::AxWaitQueueHandle\">AxWaitQueueHandle</a>",1,["arceos_api::imp::task::AxWaitQueueHandle"]],["impl Freeze for <a class=\"struct\" href=\"arceos_api/fs/struct.AxFileHandle.html\" title=\"struct arceos_api::fs::AxFileHandle\">AxFileHandle</a>",1,["arceos_api::imp::fs::AxFileHandle"]],["impl Freeze for <a class=\"struct\" href=\"arceos_api/fs/struct.AxDirHandle.html\" title=\"struct arceos_api::fs::AxDirHandle\">AxDirHandle</a>",1,["arceos_api::imp::fs::AxDirHandle"]],["impl !Freeze for <a class=\"struct\" href=\"arceos_api/net/struct.AxTcpSocketHandle.html\" title=\"struct arceos_api::net::AxTcpSocketHandle\">AxTcpSocketHandle</a>",1,["arceos_api::imp::net::AxTcpSocketHandle"]],["impl !Freeze for <a class=\"struct\" href=\"arceos_api/net/struct.AxUdpSocketHandle.html\" title=\"struct arceos_api::net::AxUdpSocketHandle\">AxUdpSocketHandle</a>",1,["arceos_api::imp::net::AxUdpSocketHandle"]]],
"arceos_posix_api":[["impl Freeze for <a class=\"struct\" href=\"arceos_posix_api/ctypes/struct.sockaddr.html\" title=\"struct arceos_posix_api::ctypes::sockaddr\">sockaddr</a>",1,["arceos_posix_api::ctypes::sockaddr"]],["impl Freeze for <a class=\"struct\" href=\"arceos_posix_api/ctypes/struct.sockaddr_storage.html\" title=\"struct arceos_posix_api::ctypes::sockaddr_storage\">sockaddr_storage</a>",1,["arceos_posix_api::ctypes::sockaddr_storage"]],["impl Freeze for <a class=\"struct\" href=\"arceos_posix_api/ctypes/struct.in_addr.html\" title=\"struct arceos_posix_api::ctypes::in_addr\">in_addr</a>",1,["arceos_posix_api::ctypes::in_addr"]],["impl Freeze for <a class=\"struct\" href=\"arceos_posix_api/ctypes/struct.sockaddr_in.html\" title=\"struct arceos_posix_api::ctypes::sockaddr_in\">sockaddr_in</a>",1,["arceos_posix_api::ctypes::sockaddr_in"]],["impl Freeze for <a class=\"struct\" href=\"arceos_posix_api/ctypes/struct.in6_addr.html\" title=\"struct arceos_posix_api::ctypes::in6_addr\">in6_addr</a>",1,["arceos_posix_api::ctypes::in6_addr"]],["impl Freeze for <a class=\"union\" href=\"arceos_posix_api/ctypes/union.in6_addr__bindgen_ty_1.html\" title=\"union arceos_posix_api::ctypes::in6_addr__bindgen_ty_1\">in6_addr__bindgen_ty_1</a>",1,["arceos_posix_api::ctypes::in6_addr__bindgen_ty_1"]],["impl Freeze for <a class=\"struct\" href=\"arceos_posix_api/ctypes/struct.sockaddr_in6.html\" title=\"struct arceos_posix_api::ctypes::sockaddr_in6\">sockaddr_in6</a>",1,["arceos_posix_api::ctypes::sockaddr_in6"]],["impl Freeze for <a class=\"struct\" href=\"arceos_posix_api/ctypes/struct.addrinfo.html\" title=\"struct arceos_posix_api::ctypes::addrinfo\">addrinfo</a>",1,["arceos_posix_api::ctypes::addrinfo"]],["impl Freeze for <a class=\"struct\" href=\"arceos_posix_api/ctypes/struct.aibuf.html\" title=\"struct arceos_posix_api::ctypes::aibuf\">aibuf</a>",1,["arceos_posix_api::ctypes::aibuf"]],["impl Freeze for <a class=\"union\" href=\"arceos_posix_api/ctypes/union.aibuf_sa.html\" title=\"union arceos_posix_api::ctypes::aibuf_sa\">aibuf_sa</a>",1,["arceos_posix_api::ctypes::aibuf_sa"]],["impl Freeze for <a class=\"struct\" href=\"arceos_posix_api/ctypes/struct.timeval.html\" title=\"struct arceos_posix_api::ctypes::timeval\">timeval</a>",1,["arceos_posix_api::ctypes::timeval"]],["impl Freeze for <a class=\"struct\" href=\"arceos_posix_api/ctypes/struct.timespec.html\" title=\"struct arceos_posix_api::ctypes::timespec\">timespec</a>",1,["arceos_posix_api::ctypes::timespec"]],["impl Freeze for <a class=\"struct\" href=\"arceos_posix_api/ctypes/struct.pthread_mutex_t.html\" title=\"struct arceos_posix_api::ctypes::pthread_mutex_t\">pthread_mutex_t</a>",1,["arceos_posix_api::ctypes::pthread_mutex_t"]],["impl Freeze for <a class=\"struct\" href=\"arceos_posix_api/ctypes/struct.pthread_mutexattr_t.html\" title=\"struct arceos_posix_api::ctypes::pthread_mutexattr_t\">pthread_mutexattr_t</a>",1,["arceos_posix_api::ctypes::pthread_mutexattr_t"]],["impl Freeze for <a class=\"struct\" href=\"arceos_posix_api/ctypes/struct.pthread_attr_t.html\" title=\"struct arceos_posix_api::ctypes::pthread_attr_t\">pthread_attr_t</a>",1,["arceos_posix_api::ctypes::pthread_attr_t"]],["impl Freeze for <a class=\"union\" href=\"arceos_posix_api/ctypes/union.pthread_attr_t__bindgen_ty_1.html\" title=\"union arceos_posix_api::ctypes::pthread_attr_t__bindgen_ty_1\">pthread_attr_t__bindgen_ty_1</a>",1,["arceos_posix_api::ctypes::pthread_attr_t__bindgen_ty_1"]],["impl Freeze for <a class=\"union\" href=\"arceos_posix_api/ctypes/union.epoll_data.html\" title=\"union arceos_posix_api::ctypes::epoll_data\">epoll_data</a>",1,["arceos_posix_api::ctypes::epoll_data"]],["impl Freeze for <a class=\"struct\" href=\"arceos_posix_api/ctypes/struct.epoll_event.html\" title=\"struct arceos_posix_api::ctypes::epoll_event\">epoll_event</a>",1,["arceos_posix_api::ctypes::epoll_event"]],["impl Freeze for <a class=\"struct\" href=\"arceos_posix_api/ctypes/struct.rlimit.html\" title=\"struct arceos_posix_api::ctypes::rlimit\">rlimit</a>",1,["arceos_posix_api::ctypes::rlimit"]],["impl Freeze for <a class=\"struct\" href=\"arceos_posix_api/ctypes/struct.fd_set.html\" title=\"struct arceos_posix_api::ctypes::fd_set\">fd_set</a>",1,["arceos_posix_api::ctypes::fd_set"]],["impl Freeze for <a class=\"struct\" href=\"arceos_posix_api/ctypes/struct.stat.html\" title=\"struct arceos_posix_api::ctypes::stat\">stat</a>",1,["arceos_posix_api::ctypes::stat"]],["impl Freeze for <a class=\"struct\" href=\"arceos_posix_api/ctypes/struct.iovec.html\" title=\"struct arceos_posix_api::ctypes::iovec\">iovec</a>",1,["arceos_posix_api::ctypes::iovec"]]],
"arm_gic":[["impl Freeze for <a class=\"struct\" href=\"arm_gic/gic_v2/struct.GicDistributor.html\" title=\"struct arm_gic::gic_v2::GicDistributor\">GicDistributor</a>",1,["arm_gic::gic_v2::GicDistributor"]],["impl Freeze for <a class=\"struct\" href=\"arm_gic/gic_v2/struct.GicCpuInterface.html\" title=\"struct arm_gic::gic_v2::GicCpuInterface\">GicCpuInterface</a>",1,["arm_gic::gic_v2::GicCpuInterface"]],["impl Freeze for <a class=\"enum\" href=\"arm_gic/enum.TriggerMode.html\" title=\"enum arm_gic::TriggerMode\">TriggerMode</a>",1,["arm_gic::TriggerMode"]],["impl Freeze for <a class=\"enum\" href=\"arm_gic/enum.InterruptType.html\" title=\"enum arm_gic::InterruptType\">InterruptType</a>",1,["arm_gic::InterruptType"]]],
"arm_pl011":[["impl Freeze for <a class=\"struct\" href=\"arm_pl011/pl011/struct.Pl011Uart.html\" title=\"struct arm_pl011::pl011::Pl011Uart\">Pl011Uart</a>",1,["arm_pl011::pl011::Pl011Uart"]]],
"axalloc":[["impl Freeze for <a class=\"struct\" href=\"axalloc/struct.GlobalPage.html\" title=\"struct axalloc::GlobalPage\">GlobalPage</a>",1,["axalloc::page::GlobalPage"]],["impl !Freeze for <a class=\"struct\" href=\"axalloc/struct.GlobalAllocator.html\" title=\"struct axalloc::GlobalAllocator\">GlobalAllocator</a>",1,["axalloc::GlobalAllocator"]]],
"axdriver":[["impl&lt;D&gt; Freeze for <a class=\"struct\" href=\"axdriver/struct.AxDeviceContainer.html\" title=\"struct axdriver::AxDeviceContainer\">AxDeviceContainer</a>&lt;D&gt;",1,["axdriver::structs::imp::AxDeviceContainer"]],["impl Freeze for <a class=\"enum\" href=\"axdriver/enum.AxDeviceEnum.html\" title=\"enum axdriver::AxDeviceEnum\">AxDeviceEnum</a>",1,["axdriver::structs::AxDeviceEnum"]],["impl Freeze for <a class=\"struct\" href=\"axdriver/struct.AllDevices.html\" title=\"struct axdriver::AllDevices\">AllDevices</a>",1,["axdriver::AllDevices"]]],
"axerrno":[["impl Freeze for <a class=\"enum\" href=\"axerrno/enum.LinuxError.html\" title=\"enum axerrno::LinuxError\">LinuxError</a>",1,["axerrno::linux_errno::LinuxError"]],["impl Freeze for <a class=\"enum\" href=\"axerrno/enum.AxError.html\" title=\"enum axerrno::AxError\">AxError</a>",1,["axerrno::AxError"]]],
"axfs":[["impl Freeze for <a class=\"struct\" href=\"axfs/fops/struct.Disk.html\" title=\"struct axfs::fops::Disk\">Disk</a>",1,["axfs::dev::Disk"]],["impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"axfs/api/struct.ReadDir.html\" title=\"struct axfs::api::ReadDir\">ReadDir</a>&lt;'a&gt;",1,["axfs::api::dir::ReadDir"]],["impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"axfs/api/struct.DirEntry.html\" title=\"struct axfs::api::DirEntry\">DirEntry</a>&lt;'a&gt;",1,["axfs::api::dir::DirEntry"]],["impl Freeze for <a class=\"struct\" href=\"axfs/api/struct.DirBuilder.html\" title=\"struct axfs::api::DirBuilder\">DirBuilder</a>",1,["axfs::api::dir::DirBuilder"]],["impl Freeze for <a class=\"struct\" href=\"axfs/api/struct.File.html\" title=\"struct axfs::api::File\">File</a>",1,["axfs::api::file::File"]],["impl Freeze for <a class=\"struct\" href=\"axfs/api/struct.Metadata.html\" title=\"struct axfs::api::Metadata\">Metadata</a>",1,["axfs::api::file::Metadata"]],["impl Freeze for <a class=\"struct\" href=\"axfs/api/struct.OpenOptions.html\" title=\"struct axfs::api::OpenOptions\">OpenOptions</a>",1,["axfs::api::file::OpenOptions"]],["impl Freeze for <a class=\"struct\" href=\"axfs/fops/struct.File.html\" title=\"struct axfs::fops::File\">File</a>",1,["axfs::fops::File"]],["impl Freeze for <a class=\"struct\" href=\"axfs/fops/struct.Directory.html\" title=\"struct axfs::fops::Directory\">Directory</a>",1,["axfs::fops::Directory"]],["impl Freeze for <a class=\"struct\" href=\"axfs/fops/struct.OpenOptions.html\" title=\"struct axfs::fops::OpenOptions\">OpenOptions</a>",1,["axfs::fops::OpenOptions"]]],
"axfs_devfs":[["impl !Freeze for <a class=\"struct\" href=\"axfs_devfs/struct.DirNode.html\" title=\"struct axfs_devfs::DirNode\">DirNode</a>",1,["axfs_devfs::dir::DirNode"]],["impl Freeze for <a class=\"struct\" href=\"axfs_devfs/struct.NullDev.html\" title=\"struct axfs_devfs::NullDev\">NullDev</a>",1,["axfs_devfs::null::NullDev"]],["impl Freeze for <a class=\"struct\" href=\"axfs_devfs/struct.ZeroDev.html\" title=\"struct axfs_devfs::ZeroDev\">ZeroDev</a>",1,["axfs_devfs::zero::ZeroDev"]],["impl !Freeze for <a class=\"struct\" href=\"axfs_devfs/struct.DeviceFileSystem.html\" title=\"struct axfs_devfs::DeviceFileSystem\">DeviceFileSystem</a>",1,["axfs_devfs::DeviceFileSystem"]]],
"axfs_ramfs":[["impl !Freeze for <a class=\"struct\" href=\"axfs_ramfs/struct.DirNode.html\" title=\"struct axfs_ramfs::DirNode\">DirNode</a>",1,["axfs_ramfs::dir::DirNode"]],["impl !Freeze for <a class=\"struct\" href=\"axfs_ramfs/struct.FileNode.html\" title=\"struct axfs_ramfs::FileNode\">FileNode</a>",1,["axfs_ramfs::file::FileNode"]],["impl !Freeze for <a class=\"struct\" href=\"axfs_ramfs/struct.RamFileSystem.html\" title=\"struct axfs_ramfs::RamFileSystem\">RamFileSystem</a>",1,["axfs_ramfs::RamFileSystem"]]],
"axfs_vfs":[["impl Freeze for <a class=\"struct\" href=\"axfs_vfs/struct.FileSystemInfo.html\" title=\"struct axfs_vfs::FileSystemInfo\">FileSystemInfo</a>",1,["axfs_vfs::structs::FileSystemInfo"]],["impl Freeze for <a class=\"struct\" href=\"axfs_vfs/struct.VfsNodeAttr.html\" title=\"struct axfs_vfs::VfsNodeAttr\">VfsNodeAttr</a>",1,["axfs_vfs::structs::VfsNodeAttr"]],["impl Freeze for <a class=\"struct\" href=\"axfs_vfs/struct.VfsNodePerm.html\" title=\"struct axfs_vfs::VfsNodePerm\">VfsNodePerm</a>",1,["axfs_vfs::structs::VfsNodePerm"]],["impl Freeze for <a class=\"enum\" href=\"axfs_vfs/enum.VfsNodeType.html\" title=\"enum axfs_vfs::VfsNodeType\">VfsNodeType</a>",1,["axfs_vfs::structs::VfsNodeType"]],["impl Freeze for <a class=\"struct\" href=\"axfs_vfs/struct.VfsDirEntry.html\" title=\"struct axfs_vfs::VfsDirEntry\">VfsDirEntry</a>",1,["axfs_vfs::structs::VfsDirEntry"]]],
"axhal":[["impl Freeze for <a class=\"struct\" href=\"axhal/arch/struct.TrapFrame.html\" title=\"struct axhal::arch::TrapFrame\">TrapFrame</a>",1,["axhal::arch::x86_64::context::TrapFrame"]],["impl Freeze for <a class=\"struct\" href=\"axhal/arch/struct.FxsaveArea.html\" title=\"struct axhal::arch::FxsaveArea\">FxsaveArea</a>",1,["axhal::arch::x86_64::context::FxsaveArea"]],["impl Freeze for <a class=\"struct\" href=\"axhal/arch/struct.ExtendedState.html\" title=\"struct axhal::arch::ExtendedState\">ExtendedState</a>",1,["axhal::arch::x86_64::context::ExtendedState"]],["impl Freeze for <a class=\"struct\" href=\"axhal/arch/struct.TaskContext.html\" title=\"struct axhal::arch::TaskContext\">TaskContext</a>",1,["axhal::arch::x86_64::context::TaskContext"]],["impl Freeze for <a class=\"struct\" href=\"axhal/arch/struct.GdtStruct.html\" title=\"struct axhal::arch::GdtStruct\">GdtStruct</a>",1,["axhal::arch::x86_64::gdt::GdtStruct"]],["impl Freeze for <a class=\"struct\" href=\"axhal/arch/struct.IdtStruct.html\" title=\"struct axhal::arch::IdtStruct\">IdtStruct</a>",1,["axhal::arch::x86_64::idt::IdtStruct"]],["impl Freeze for <a class=\"struct\" href=\"axhal/mem/struct.MemRegionFlags.html\" title=\"struct axhal::mem::MemRegionFlags\">MemRegionFlags</a>",1,["axhal::mem::MemRegionFlags"]],["impl Freeze for <a class=\"struct\" href=\"axhal/mem/struct.MemRegion.html\" title=\"struct axhal::mem::MemRegion\">MemRegion</a>",1,["axhal::mem::MemRegion"]],["impl Freeze for <a class=\"struct\" href=\"axhal/tls/struct.TlsArea.html\" title=\"struct axhal::tls::TlsArea\">TlsArea</a>",1,["axhal::tls::TlsArea"]],["impl Freeze for <a class=\"struct\" href=\"axhal/paging/struct.PagingIfImpl.html\" title=\"struct axhal::paging::PagingIfImpl\">PagingIfImpl</a>",1,["axhal::paging::PagingIfImpl"]]],
"axio":[["impl&lt;R&gt; Freeze for <a class=\"struct\" href=\"axio/struct.BufReader.html\" title=\"struct axio::BufReader\">BufReader</a>&lt;R&gt;<div class=\"where\">where\n    R: Freeze,</div>",1,["axio::buffered::bufreader::BufReader"]],["impl Freeze for <a class=\"enum\" href=\"axio/enum.SeekFrom.html\" title=\"enum axio::SeekFrom\">SeekFrom</a>",1,["axio::SeekFrom"]],["impl Freeze for <a class=\"struct\" href=\"axio/struct.PollState.html\" title=\"struct axio::PollState\">PollState</a>",1,["axio::PollState"]]],
"axnet":[["impl !Freeze for <a class=\"struct\" href=\"axnet/struct.TcpSocket.html\" title=\"struct axnet::TcpSocket\">TcpSocket</a>",1,["axnet::smoltcp_impl::tcp::TcpSocket"]],["impl !Freeze for <a class=\"struct\" href=\"axnet/struct.UdpSocket.html\" title=\"struct axnet::UdpSocket\">UdpSocket</a>",1,["axnet::smoltcp_impl::udp::UdpSocket"]]],
"axstd":[["impl Freeze for <a class=\"struct\" href=\"axstd/io/struct.Stdin.html\" title=\"struct axstd::io::Stdin\">Stdin</a>",1,["axstd::io::stdio::Stdin"]],["impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"axstd/io/struct.StdinLock.html\" title=\"struct axstd::io::StdinLock\">StdinLock</a>&lt;'a&gt;",1,["axstd::io::stdio::StdinLock"]],["impl Freeze for <a class=\"struct\" href=\"axstd/io/struct.Stdout.html\" title=\"struct axstd::io::Stdout\">Stdout</a>",1,["axstd::io::stdio::Stdout"]],["impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"axstd/io/struct.StdoutLock.html\" title=\"struct axstd::io::StdoutLock\">StdoutLock</a>&lt;'a&gt;",1,["axstd::io::stdio::StdoutLock"]],["impl&lt;T&gt; !Freeze for <a class=\"struct\" href=\"axstd/sync/struct.Mutex.html\" title=\"struct axstd::sync::Mutex\">Mutex</a>&lt;T&gt;",1,["axstd::sync::mutex::Mutex"]],["impl&lt;'a, T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; Freeze for <a class=\"struct\" href=\"axstd/sync/struct.MutexGuard.html\" title=\"struct axstd::sync::MutexGuard\">MutexGuard</a>&lt;'a, T&gt;",1,["axstd::sync::mutex::MutexGuard"]],["impl Freeze for <a class=\"struct\" href=\"axstd/thread/struct.ThreadId.html\" title=\"struct axstd::thread::ThreadId\">ThreadId</a>",1,["axstd::thread::multi::ThreadId"]],["impl Freeze for <a class=\"struct\" href=\"axstd/thread/struct.Thread.html\" title=\"struct axstd::thread::Thread\">Thread</a>",1,["axstd::thread::multi::Thread"]],["impl Freeze for <a class=\"struct\" href=\"axstd/thread/struct.Builder.html\" title=\"struct axstd::thread::Builder\">Builder</a>",1,["axstd::thread::multi::Builder"]],["impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"axstd/thread/struct.JoinHandle.html\" title=\"struct axstd::thread::JoinHandle\">JoinHandle</a>&lt;T&gt;",1,["axstd::thread::multi::JoinHandle"]],["impl Freeze for <a class=\"struct\" href=\"axstd/time/struct.Instant.html\" title=\"struct axstd::time::Instant\">Instant</a>",1,["axstd::time::Instant"]],["impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"axstd/fs/struct.ReadDir.html\" title=\"struct axstd::fs::ReadDir\">ReadDir</a>&lt;'a&gt;",1,["axstd::fs::dir::ReadDir"]],["impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"axstd/fs/struct.DirEntry.html\" title=\"struct axstd::fs::DirEntry\">DirEntry</a>&lt;'a&gt;",1,["axstd::fs::dir::DirEntry"]],["impl Freeze for <a class=\"struct\" href=\"axstd/fs/struct.DirBuilder.html\" title=\"struct axstd::fs::DirBuilder\">DirBuilder</a>",1,["axstd::fs::dir::DirBuilder"]],["impl Freeze for <a class=\"struct\" href=\"axstd/fs/struct.File.html\" title=\"struct axstd::fs::File\">File</a>",1,["axstd::fs::file::File"]],["impl Freeze for <a class=\"struct\" href=\"axstd/fs/struct.Metadata.html\" title=\"struct axstd::fs::Metadata\">Metadata</a>",1,["axstd::fs::file::Metadata"]],["impl Freeze for <a class=\"struct\" href=\"axstd/fs/struct.OpenOptions.html\" title=\"struct axstd::fs::OpenOptions\">OpenOptions</a>",1,["axstd::fs::file::OpenOptions"]],["impl !Freeze for <a class=\"struct\" href=\"axstd/net/struct.TcpStream.html\" title=\"struct axstd::net::TcpStream\">TcpStream</a>",1,["axstd::net::tcp::TcpStream"]],["impl !Freeze for <a class=\"struct\" href=\"axstd/net/struct.TcpListener.html\" title=\"struct axstd::net::TcpListener\">TcpListener</a>",1,["axstd::net::tcp::TcpListener"]],["impl !Freeze for <a class=\"struct\" href=\"axstd/net/struct.UdpSocket.html\" title=\"struct axstd::net::UdpSocket\">UdpSocket</a>",1,["axstd::net::udp::UdpSocket"]]],
"axsync":[["impl&lt;T&gt; !Freeze for <a class=\"struct\" href=\"axsync/struct.Mutex.html\" title=\"struct axsync::Mutex\">Mutex</a>&lt;T&gt;",1,["axsync::mutex::Mutex"]],["impl&lt;'a, T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; Freeze for <a class=\"struct\" href=\"axsync/struct.MutexGuard.html\" title=\"struct axsync::MutexGuard\">MutexGuard</a>&lt;'a, T&gt;",1,["axsync::mutex::MutexGuard"]]],
"axtask":[["impl Freeze for <a class=\"struct\" href=\"axtask/struct.TaskId.html\" title=\"struct axtask::TaskId\">TaskId</a>",1,["axtask::task::TaskId"]],["impl !Freeze for <a class=\"struct\" href=\"axtask/struct.TaskInner.html\" title=\"struct axtask::TaskInner\">TaskInner</a>",1,["axtask::task::TaskInner"]],["impl Freeze for <a class=\"struct\" href=\"axtask/struct.CurrentTask.html\" title=\"struct axtask::CurrentTask\">CurrentTask</a>",1,["axtask::task::CurrentTask"]],["impl !Freeze for <a class=\"struct\" href=\"axtask/struct.WaitQueue.html\" title=\"struct axtask::WaitQueue\">WaitQueue</a>",1,["axtask::wait_queue::WaitQueue"]]],
"capability":[["impl Freeze for <a class=\"struct\" href=\"capability/struct.Cap.html\" title=\"struct capability::Cap\">Cap</a>",1,["capability::Cap"]],["impl Freeze for <a class=\"struct\" href=\"capability/struct.CapError.html\" title=\"struct capability::CapError\">CapError</a>",1,["capability::CapError"]],["impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"capability/struct.WithCap.html\" title=\"struct capability::WithCap\">WithCap</a>&lt;T&gt;<div class=\"where\">where\n    T: Freeze,</div>",1,["capability::WithCap"]]],
"driver_block":[["impl Freeze for <a class=\"struct\" href=\"driver_block/ramdisk/struct.RamDisk.html\" title=\"struct driver_block::ramdisk::RamDisk\">RamDisk</a>",1,["driver_block::ramdisk::RamDisk"]],["impl Freeze for <a class=\"struct\" href=\"driver_block/bcm2835sdhci/struct.SDHCIDriver.html\" title=\"struct driver_block::bcm2835sdhci::SDHCIDriver\">SDHCIDriver</a>",1,["driver_block::bcm2835sdhci::SDHCIDriver"]]],
"driver_common":[["impl Freeze for <a class=\"enum\" href=\"driver_common/enum.DeviceType.html\" title=\"enum driver_common::DeviceType\">DeviceType</a>",1,["driver_common::DeviceType"]],["impl Freeze for <a class=\"enum\" href=\"driver_common/enum.DevError.html\" title=\"enum driver_common::DevError\">DevError</a>",1,["driver_common::DevError"]]],
"driver_display":[["impl Freeze for <a class=\"struct\" href=\"driver_display/struct.DisplayInfo.html\" title=\"struct driver_display::DisplayInfo\">DisplayInfo</a>",1,["driver_display::DisplayInfo"]],["impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"driver_display/struct.FrameBuffer.html\" title=\"struct driver_display::FrameBuffer\">FrameBuffer</a>&lt;'a&gt;",1,["driver_display::FrameBuffer"]]],
"driver_net":[["impl&lt;H, const QS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>, const QN: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u16.html\">u16</a>&gt; Freeze for <a class=\"struct\" href=\"driver_net/ixgbe/struct.IxgbeNic.html\" title=\"struct driver_net::ixgbe::IxgbeNic\">IxgbeNic</a>&lt;H, QS, QN&gt;",1,["driver_net::ixgbe::IxgbeNic"]],["impl Freeze for <a class=\"struct\" href=\"driver_net/struct.NetBuf.html\" title=\"struct driver_net::NetBuf\">NetBuf</a>",1,["driver_net::net_buf::NetBuf"]],["impl !Freeze for <a class=\"struct\" href=\"driver_net/struct.NetBufPool.html\" title=\"struct driver_net::NetBufPool\">NetBufPool</a>",1,["driver_net::net_buf::NetBufPool"]],["impl Freeze for <a class=\"struct\" href=\"driver_net/struct.EthernetAddress.html\" title=\"struct driver_net::EthernetAddress\">EthernetAddress</a>",1,["driver_net::EthernetAddress"]],["impl Freeze for <a class=\"struct\" href=\"driver_net/struct.NetBufPtr.html\" title=\"struct driver_net::NetBufPtr\">NetBufPtr</a>",1,["driver_net::NetBufPtr"]]],
"driver_pci":[["impl Freeze for <a class=\"struct\" href=\"driver_pci/struct.PciRangeAllocator.html\" title=\"struct driver_pci::PciRangeAllocator\">PciRangeAllocator</a>",1,["driver_pci::PciRangeAllocator"]]],
"driver_virtio":[["impl&lt;H, T&gt; Freeze for <a class=\"struct\" href=\"driver_virtio/struct.VirtIoBlkDev.html\" title=\"struct driver_virtio::VirtIoBlkDev\">VirtIoBlkDev</a>&lt;H, T&gt;<div class=\"where\">where\n    T: Freeze,</div>",1,["driver_virtio::blk::VirtIoBlkDev"]],["impl&lt;H, T&gt; Freeze for <a class=\"struct\" href=\"driver_virtio/struct.VirtIoGpuDev.html\" title=\"struct driver_virtio::VirtIoGpuDev\">VirtIoGpuDev</a>&lt;H, T&gt;<div class=\"where\">where\n    T: Freeze,</div>",1,["driver_virtio::gpu::VirtIoGpuDev"]],["impl&lt;H, T, const QS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; Freeze for <a class=\"struct\" href=\"driver_virtio/struct.VirtIoNetDev.html\" title=\"struct driver_virtio::VirtIoNetDev\">VirtIoNetDev</a>&lt;H, T, QS&gt;<div class=\"where\">where\n    T: Freeze,</div>",1,["driver_virtio::net::VirtIoNetDev"]]],
"dw_apb_uart":[["impl Freeze for <a class=\"struct\" href=\"dw_apb_uart/struct.DW8250.html\" title=\"struct dw_apb_uart::DW8250\">DW8250</a>",1,["dw_apb_uart::DW8250"]]],
"flatten_objects":[["impl&lt;T, const CAP: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; Freeze for <a class=\"struct\" href=\"flatten_objects/struct.FlattenObjects.html\" title=\"struct flatten_objects::FlattenObjects\">FlattenObjects</a>&lt;T, CAP&gt;<div class=\"where\">where\n    T: Freeze,</div>",1,["flatten_objects::FlattenObjects"]]],
"handler_table":[["impl&lt;const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; !Freeze for <a class=\"struct\" href=\"handler_table/struct.HandlerTable.html\" title=\"struct handler_table::HandlerTable\">HandlerTable</a>&lt;N&gt;",1,["handler_table::HandlerTable"]]],
"kernel_guard":[["impl Freeze for <a class=\"struct\" href=\"kernel_guard/struct.NoOp.html\" title=\"struct kernel_guard::NoOp\">NoOp</a>",1,["kernel_guard::NoOp"]],["impl Freeze for <a class=\"struct\" href=\"kernel_guard/struct.IrqSave.html\" title=\"struct kernel_guard::IrqSave\">IrqSave</a>",1,["kernel_guard::IrqSave"]],["impl Freeze for <a class=\"struct\" href=\"kernel_guard/struct.NoPreempt.html\" title=\"struct kernel_guard::NoPreempt\">NoPreempt</a>",1,["kernel_guard::NoPreempt"]],["impl Freeze for <a class=\"struct\" href=\"kernel_guard/struct.NoPreemptIrqSave.html\" title=\"struct kernel_guard::NoPreemptIrqSave\">NoPreemptIrqSave</a>",1,["kernel_guard::NoPreemptIrqSave"]]],
"lazy_init":[["impl&lt;T&gt; !Freeze for <a class=\"struct\" href=\"lazy_init/struct.LazyInit.html\" title=\"struct lazy_init::LazyInit\">LazyInit</a>&lt;T&gt;",1,["lazy_init::LazyInit"]]],
"linked_list":[["impl&lt;G&gt; Freeze for <a class=\"struct\" href=\"linked_list/struct.List.html\" title=\"struct linked_list::List\">List</a>&lt;G&gt;",1,["linked_list::linked_list::List"]],["impl&lt;A: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; Freeze for <a class=\"struct\" href=\"linked_list/unsafe_list/struct.List.html\" title=\"struct linked_list::unsafe_list::List\">List</a>&lt;A&gt;",1,["linked_list::unsafe_list::List"]],["impl&lt;'a, A: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; Freeze for <a class=\"struct\" href=\"linked_list/unsafe_list/struct.Iterator.html\" title=\"struct linked_list::unsafe_list::Iterator\">Iterator</a>&lt;'a, A&gt;",1,["linked_list::unsafe_list::Iterator"]],["impl&lt;T&gt; !Freeze for <a class=\"struct\" href=\"linked_list/unsafe_list/struct.Links.html\" title=\"struct linked_list::unsafe_list::Links\">Links</a>&lt;T&gt;",1,["linked_list::unsafe_list::Links"]],["impl&lt;'a, A: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; Freeze for <a class=\"struct\" href=\"linked_list/unsafe_list/struct.Cursor.html\" title=\"struct linked_list::unsafe_list::Cursor\">Cursor</a>&lt;'a, A&gt;",1,["linked_list::unsafe_list::Cursor"]]],
"memory_addr":[["impl Freeze for <a class=\"struct\" href=\"memory_addr/struct.PhysAddr.html\" title=\"struct memory_addr::PhysAddr\">PhysAddr</a>",1,["memory_addr::PhysAddr"]],["impl Freeze for <a class=\"struct\" href=\"memory_addr/struct.VirtAddr.html\" title=\"struct memory_addr::VirtAddr\">VirtAddr</a>",1,["memory_addr::VirtAddr"]]],
"page_table":[["impl Freeze for <a class=\"struct\" href=\"page_table/x86_64/struct.X64PagingMetaData.html\" title=\"struct page_table::x86_64::X64PagingMetaData\">X64PagingMetaData</a>",1,["page_table::arch::x86_64::X64PagingMetaData"]],["impl Freeze for <a class=\"struct\" href=\"page_table/riscv/struct.Sv39MetaData.html\" title=\"struct page_table::riscv::Sv39MetaData\">Sv39MetaData</a>",1,["page_table::arch::riscv::Sv39MetaData"]],["impl Freeze for <a class=\"struct\" href=\"page_table/riscv/struct.Sv48MetaData.html\" title=\"struct page_table::riscv::Sv48MetaData\">Sv48MetaData</a>",1,["page_table::arch::riscv::Sv48MetaData"]],["impl Freeze for <a class=\"struct\" href=\"page_table/aarch64/struct.A64PagingMetaData.html\" title=\"struct page_table::aarch64::A64PagingMetaData\">A64PagingMetaData</a>",1,["page_table::arch::aarch64::A64PagingMetaData"]],["impl&lt;M, PTE, IF&gt; Freeze for <a class=\"struct\" href=\"page_table/struct.PageTable64.html\" title=\"struct page_table::PageTable64\">PageTable64</a>&lt;M, PTE, IF&gt;",1,["page_table::bits64::PageTable64"]],["impl Freeze for <a class=\"enum\" href=\"page_table/enum.PagingError.html\" title=\"enum page_table::PagingError\">PagingError</a>",1,["page_table::PagingError"]],["impl Freeze for <a class=\"enum\" href=\"page_table/enum.PageSize.html\" title=\"enum page_table::PageSize\">PageSize</a>",1,["page_table::PageSize"]]],
"page_table_entry":[["impl Freeze for <a class=\"struct\" href=\"page_table_entry/x86_64/struct.X64PTE.html\" title=\"struct page_table_entry::x86_64::X64PTE\">X64PTE</a>",1,["page_table_entry::arch::x86_64::X64PTE"]],["impl Freeze for <a class=\"struct\" href=\"page_table_entry/riscv/struct.PTEFlags.html\" title=\"struct page_table_entry::riscv::PTEFlags\">PTEFlags</a>",1,["page_table_entry::arch::riscv::PTEFlags"]],["impl Freeze for <a class=\"struct\" href=\"page_table_entry/riscv/struct.Rv64PTE.html\" title=\"struct page_table_entry::riscv::Rv64PTE\">Rv64PTE</a>",1,["page_table_entry::arch::riscv::Rv64PTE"]],["impl Freeze for <a class=\"struct\" href=\"page_table_entry/aarch64/struct.DescriptorAttr.html\" title=\"struct page_table_entry::aarch64::DescriptorAttr\">DescriptorAttr</a>",1,["page_table_entry::arch::aarch64::DescriptorAttr"]],["impl Freeze for <a class=\"enum\" href=\"page_table_entry/aarch64/enum.MemAttr.html\" title=\"enum page_table_entry::aarch64::MemAttr\">MemAttr</a>",1,["page_table_entry::arch::aarch64::MemAttr"]],["impl Freeze for <a class=\"struct\" href=\"page_table_entry/aarch64/struct.A64PTE.html\" title=\"struct page_table_entry::aarch64::A64PTE\">A64PTE</a>",1,["page_table_entry::arch::aarch64::A64PTE"]],["impl Freeze for <a class=\"struct\" href=\"page_table_entry/struct.MappingFlags.html\" title=\"struct page_table_entry::MappingFlags\">MappingFlags</a>",1,["page_table_entry::MappingFlags"]]],
"percpu":[["impl Freeze for <a class=\"struct\" href=\"percpu/struct.EXAMPLE_PERCPU_DATA_WRAPPER.html\" title=\"struct percpu::EXAMPLE_PERCPU_DATA_WRAPPER\">EXAMPLE_PERCPU_DATA_WRAPPER</a>",1,["percpu::EXAMPLE_PERCPU_DATA_WRAPPER"]]],
"ratio":[["impl Freeze for <a class=\"struct\" href=\"ratio/struct.Ratio.html\" title=\"struct ratio::Ratio\">Ratio</a>",1,["ratio::Ratio"]]],
"scheduler":[["impl&lt;T&gt; !Freeze for <a class=\"struct\" href=\"scheduler/struct.CFSTask.html\" title=\"struct scheduler::CFSTask\">CFSTask</a>&lt;T&gt;",1,["scheduler::cfs::CFSTask"]],["impl&lt;T&gt; !Freeze for <a class=\"struct\" href=\"scheduler/struct.CFScheduler.html\" title=\"struct scheduler::CFScheduler\">CFScheduler</a>&lt;T&gt;",1,["scheduler::cfs::CFScheduler"]],["impl&lt;T&gt; !Freeze for <a class=\"struct\" href=\"scheduler/struct.FifoTask.html\" title=\"struct scheduler::FifoTask\">FifoTask</a>&lt;T&gt;",1,["scheduler::fifo::FifoTask"]],["impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"scheduler/struct.FifoScheduler.html\" title=\"struct scheduler::FifoScheduler\">FifoScheduler</a>&lt;T&gt;",1,["scheduler::fifo::FifoScheduler"]],["impl&lt;T, const MAX_TIME_SLICE: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; !Freeze for <a class=\"struct\" href=\"scheduler/struct.RRTask.html\" title=\"struct scheduler::RRTask\">RRTask</a>&lt;T, MAX_TIME_SLICE&gt;",1,["scheduler::round_robin::RRTask"]],["impl&lt;T, const MAX_TIME_SLICE: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; Freeze for <a class=\"struct\" href=\"scheduler/struct.RRScheduler.html\" title=\"struct scheduler::RRScheduler\">RRScheduler</a>&lt;T, MAX_TIME_SLICE&gt;",1,["scheduler::round_robin::RRScheduler"]]],
"slab_allocator":[["impl Freeze for <a class=\"struct\" href=\"slab_allocator/struct.Heap.html\" title=\"struct slab_allocator::Heap\">Heap</a>",1,["slab_allocator::Heap"]]],
"spinlock":[["impl&lt;G, T&gt; !Freeze for <a class=\"struct\" href=\"spinlock/struct.BaseSpinLock.html\" title=\"struct spinlock::BaseSpinLock\">BaseSpinLock</a>&lt;G, T&gt;",1,["spinlock::base::BaseSpinLock"]],["impl&lt;'a, G, T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; Freeze for <a class=\"struct\" href=\"spinlock/struct.BaseSpinLockGuard.html\" title=\"struct spinlock::BaseSpinLockGuard\">BaseSpinLockGuard</a>&lt;'a, G, T&gt;<div class=\"where\">where\n    &lt;G as <a class=\"trait\" href=\"kernel_guard/trait.BaseGuard.html\" title=\"trait kernel_guard::BaseGuard\">BaseGuard</a>&gt;::<a class=\"associatedtype\" href=\"kernel_guard/trait.BaseGuard.html#associatedtype.State\" title=\"type kernel_guard::BaseGuard::State\">State</a>: Freeze,</div>",1,["spinlock::base::BaseSpinLockGuard"]]],
"timer_list":[["impl&lt;E&gt; Freeze for <a class=\"struct\" href=\"timer_list/struct.TimerList.html\" title=\"struct timer_list::TimerList\">TimerList</a>&lt;E&gt;",1,["timer_list::TimerList"]],["impl Freeze for <a class=\"struct\" href=\"timer_list/struct.TimerEventFn.html\" title=\"struct timer_list::TimerEventFn\">TimerEventFn</a>",1,["timer_list::TimerEventFn"]]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()