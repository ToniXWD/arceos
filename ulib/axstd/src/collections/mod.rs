mod hashmap;

#[cfg(feature = "alloc")]
pub use hashmap::HashMap;

// #[cfg(feature = "alloc")]
// #[cfg(feature = "allocator_api")]
// #[doc(no_inline)]

// #[cfg(feature = "alloc")]
// #[doc(no_inline)]
// pub use hashbrown::HashMap;