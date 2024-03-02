use core::alloc::Layout;
use core::ptr::NonNull;
use core::{mem, ptr};

use crate::{AllocError, AllocResult, BaseAllocator, ByteAllocator};

pub(crate) fn align_up(addr: usize, align: usize) -> usize {
    (addr + align - 1) & !(align - 1)
}

struct ListNode {
    size: usize,
    next: Option<&'static mut ListNode>,
}

impl ListNode {
    const fn new(size: usize) -> Self {
        ListNode { size, next: None }
    }

    fn start_addr(&self) -> usize {
        self as *const Self as usize
    }

    fn end_addr(&self) -> usize {
        self.start_addr() + self.size
    }
}

pub struct LinkedListAllocator {
    head: ListNode,
    total: usize,
}

impl BaseAllocator for LinkedListAllocator {
    /// Initialize the allocator with the given heap bounds.
    ///
    /// This function is unsafe because the caller must guarantee that the given
    /// heap bounds are valid and that the heap is unused. This method must be
    /// called only once.
    fn init(&mut self, start: usize, size: usize) {
        self.add_free_region(start, size);
    }

    /// Adds the given memory region to the front of the list.
    fn add_memory(&mut self, start: usize, size: usize) -> Result<(), AllocError> {
        // ensure that the freed region is capable of holding ListNode
        assert_eq!(align_up(start, mem::align_of::<ListNode>()), start);
        assert!(size >= mem::size_of::<ListNode>());

        // create a new list node and append it at the start of the list
        let mut node = ListNode::new(size);
        node.next = self.head.next.take();
        let node_ptr = start as *mut ListNode;
        unsafe { node_ptr.write(node) };
        self.head.next = Some(unsafe { &mut *node_ptr });

        self.total += size;
        Ok(())
    }
}

impl ByteAllocator for LinkedListAllocator {
    fn alloc(&mut self, layout: Layout) -> AllocResult<NonNull<u8>> {
        // perform layout adjustments
        let (size, align) = LinkedListAllocator::size_align(layout);

        if let Some((region, alloc_start)) = self.find_region(size, align) {
            let alloc_end = alloc_start.checked_add(size).expect("overflow");
            let excess_size = region.end_addr() - alloc_end;
            if excess_size > 0 {
                self.add_free_region(alloc_end, excess_size);
            }
            self.total -= size;
            Ok(NonNull::new(alloc_start as *mut u8).unwrap())
        } else {
            Err(AllocError::NoMemory)
        }
    }

    fn available_bytes(&self) -> usize {
        let mut sum = 0;
        let mut current = &self.head;
        // look for a large enough memory region in linked list
        while let Some(ref region) = current.next {
            sum += region.size;
            // region not suitable -> continue with next region
            current = current.next.as_ref().unwrap();
        }
        sum
    }

    fn dealloc(&mut self, pos: ptr::NonNull<u8>, layout: Layout) {
        // perform layout adjustments
        let (size, _) = LinkedListAllocator::size_align(layout);
        let addr = pos.as_ptr() as usize;
        self.total += size;
        self.add_free_region(addr, size)
    }

    fn total_bytes(&self) -> usize {
        self.total
    }
    fn used_bytes(&self) -> usize {
        self.total - self.available_bytes()
    }
}

impl LinkedListAllocator {
    /// Creates an empty LinkedListAllocator.
    pub const fn new() -> Self {
        Self {
            head: ListNode::new(0),
            total: 0,
        }
    }

    /// Adds the given memory region to the front of the list.
    fn add_free_region(&mut self, addr: usize, size: usize) {
        // ensure that the freed region is capable of holding ListNode
        assert_eq!(align_up(addr, mem::align_of::<ListNode>()), addr);
        assert!(size >= mem::size_of::<ListNode>());

        // create a new list node and append it at the start of the list
        let mut node = ListNode::new(size);
        node.next = self.head.next.take();
        let node_ptr = addr as *mut ListNode;
        unsafe { node_ptr.write(node) };
        self.head.next = Some(unsafe { &mut *node_ptr })
    }

    /// Looks for a free region with the given size and alignment and removes
    /// it from the list.
    ///
    /// Returns a tuple of the list node and the start address of the allocation.
    fn find_region(&mut self, size: usize, align: usize) -> Option<(&'static mut ListNode, usize)> {
        // reference to current list node, updated for each iteration
        let mut current = &mut self.head;
        // look for a large enough memory region in linked list
        while let Some(ref mut region) = current.next {
            if let Ok(alloc_start) = Self::alloc_from_region(&region, size, align) {
                // region suitable for allocation -> remove node from list
                let next = region.next.take();
                let ret = Some((current.next.take().unwrap(), alloc_start));
                current.next = next;
                return ret;
            } else {
                // region not suitable -> continue with next region
                current = current.next.as_mut().unwrap();
            }
        }

        // no suitable region found
        None
    }

    /// Try to use the given region for an allocation with given size and alignment.
    ///
    /// Returns the allocation start address on success.
    fn alloc_from_region(region: &ListNode, size: usize, align: usize) -> Result<usize, ()> {
        let alloc_start = align_up(region.start_addr(), align);
        let alloc_end = alloc_start.checked_add(size).ok_or(())?;

        if alloc_end > region.end_addr() {
            // region too small
            return Err(());
        }

        let excess_size = region.end_addr() - alloc_end;
        if excess_size > 0 && excess_size < mem::size_of::<ListNode>() {
            // rest of region too small to hold a ListNode (required because the
            // allocation splits the region in a used and a free part)
            return Err(());
        }

        // region suitable for allocation
        Ok(alloc_start)
    }

    /// Adjust the given layout so that the resulting allocated memory
    /// region is also capable of storing a `ListNode`.
    ///
    /// Returns the adjusted size and alignment as a (size, align) tuple.
    fn size_align(layout: Layout) -> (usize, usize) {
        let layout = layout
            .align_to(mem::align_of::<ListNode>())
            .expect("adjusting alignment failed")
            .pad_to_align();
        let size = layout.size().max(mem::size_of::<ListNode>());
        (size, layout.align())
    }
}
