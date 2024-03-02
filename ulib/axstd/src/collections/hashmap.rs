/// Linear probing HashMap

#[cfg(feature = "alloc")]
#[doc(no_inline)]
use alloc::{format, vec, vec::Vec};

#[cfg(feature = "alloc")]
pub struct HashMap<K, V> {
    pub(crate) buckets: Vec<Option<(K, V)>>,
    pub(crate) capacity: usize,
    pub(crate) size: usize,
}

#[cfg(feature = "alloc")]
impl<K, V> HashMap<K, V>
where
    K: PartialEq + core::clone::Clone + AsRef<[u8]> + core::fmt::Display,
    V: core::clone::Clone,
{
    pub fn new() -> Self {
        HashMap {
            buckets: vec![None; 128],
            capacity: 128,
            size: 0,
        }
    }

    pub fn insert(&mut self, key: K, value: V) -> Option<V> {
        self.size += 1;

        if self.size == self.capacity {
            self.capacity *= 2;
            self.rehash(self.capacity);
        }

        let index = self.hash(&key) % self.capacity;

        let mut probe_distance = 0;

        while probe_distance < self.capacity {
            let bucket_index = (index + probe_distance) % self.capacity;
            match &mut self.buckets[bucket_index] {
                Some((existing_key, _)) if *existing_key == key => {
                    let &mut (_, ref mut existing_value) =
                        self.buckets[bucket_index].as_mut().unwrap();
                    return Some(core::mem::replace(existing_value, value));
                }
                None => {
                    // let msg2 = format!("key: {key}");
                    // println!("{}", msg2);
                    self.buckets[bucket_index] = Some((key, value));
                    return None;
                }
                _ => {}
            }

            probe_distance += 1;
        }

        None
    }

    pub fn contains_key(&mut self, key: &K) -> bool {
        let target_hash = self.hash(&key);
        let index = target_hash % self.capacity;

        let mut probe_distance = 0;

        while probe_distance < self.capacity {
            let bucket_index = (index + probe_distance) % self.capacity;
            match &mut self.buckets[bucket_index] {
                Some((existing_key, _)) => {
                    // let msg1 = format!("existing_key: {existing_key}");
                    // println!("{}", msg1);
                    // let msg2 = format!("key: {key}");
                    // println!("{}", msg2);
                    if existing_key == key {
                        return true;
                    }
                }
                None => {
                    return false;
                }
            }

            probe_distance += 1;
        }

        false
    }

    pub fn rehash(&mut self, new_size: usize) {
        let mut new_buckets: Vec<Option<(K, V)>> = vec![None; new_size];

        for entry in self.buckets.iter().filter_map(|e| e.as_ref()) {
            let &(ref key, ref value) = entry;
            let index = self.hash(key) % new_size;

            let mut probe_distance = 0;
            while probe_distance < new_size {
                let bucket_index = (index + probe_distance) % new_size;
                if new_buckets[bucket_index].is_none() {
                    new_buckets[bucket_index] = Some((key.clone(), value.clone()));
                    break;
                }
                probe_distance += 1;
            }
        }

        self.buckets = new_buckets;
    }

    fn hash<T: AsRef<[u8]>>(&self, t: &T) -> usize {
        let bytes = t.as_ref();
        let mut hash: usize = 0;

        for &byte in bytes.iter() {
            hash = hash.wrapping_mul(31).wrapping_add(byte as usize);
        }

        hash % self.capacity
    }

    pub fn iter(&self) -> HashMapIter<K, V> {
        HashMapIter {
            hashmap: self,
            index: 0,
        }
    }
}

#[cfg(feature = "alloc")]
pub struct HashMapIter<'a, K, V> {
    hashmap: &'a HashMap<K, V>,
    index: usize,
}

#[cfg(feature = "alloc")]
impl<'a, K, V> Iterator for HashMapIter<'a, K, V> {
    type Item = (&'a K, &'a V);

    fn next(&mut self) -> Option<Self::Item> {
        while self.index < self.hashmap.buckets.len() {
            match &self.hashmap.buckets[self.index] {
                Some((ref key, ref value)) => {
                    self.index += 1;
                    return Some((key, value));
                }
                None => {
                    self.index += 1;
                }
            }
        }
        None
    }
}
