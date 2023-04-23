/*
Design a HashMap without using any built-in hash table libraries.

    To be specific, your design should include these functions:

    put(key, value) : Insert a (key, value) pair into the HashMap. If the value already exists in the HashMap, update the value.
get(key): Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
remove(key) : Remove the mapping for the value key if this map contains the mapping for the key.

    Example:

MyHashMap hashMap = new MyHashMap();
hashMap.put(1, 1);
hashMap.put(2, 2);
hashMap.get(1);            // returns 1
hashMap.get(3);            // returns -1 (not found)
hashMap.put(2, 1);          // update the existing value
hashMap.get(2);            // returns 1
hashMap.remove(2);          // remove the mapping for 2
hashMap.get(2);            // returns -1 (not found)

Note:

    All keys and values will be in the range of [0, 1000000].
    The number of operations will be in the range of [1, 10000].
    Please do not use the built-in HashMap library.
*/


/**
 * Runtime: 228 ms, faster than 38.59% of JavaScript online submissions for Design HashMap.
 Memory Usage: 54.1 MB, less than 100.00% of JavaScript online submissions for Design HashMap.
 * Initialize your data structure here.
 */
var MyHashMap = function() {
    this.data = new Array(10000)
};

/**
 * value will always be non-negative.
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    const div = Math.floor(key / 100)
    const num = key % 10000
    if (!this.data[div]) {
        this.data[div] = new Array(100)
        this.data[div][num] = value
    } else {
        this.data[div][num] = value
    }
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    const div = Math.floor(key / 100)
    if (!this.data[div]) {
        return -1
    }
    const num = key % 10000
    return typeof this.data[div][num] === 'number' ? this.data[div][num] : -1
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    const div = Math.floor(key / 100)
    if (!this.data[div]) {
        return
    }
    const num = key % 10000
    this.data[div][num] = undefined
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
