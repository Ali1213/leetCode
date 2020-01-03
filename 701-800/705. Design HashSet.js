/*
Design a HashSet without using any built-in hash table libraries.

    To be specific, your design should include these functions:

    add(value): Insert a value into the HashSet.
contains(value) : Return whether the value exists in the HashSet or not.
remove(value): Remove a value in the HashSet. If the value does not exist in the HashSet, do nothing.

    Example:

MyHashSet hashSet = new MyHashSet();
hashSet.add(1);
hashSet.add(2);
hashSet.contains(1);    // returns true
hashSet.contains(3);    // returns false (not found)
hashSet.add(2);
hashSet.contains(2);    // returns true
hashSet.remove(2);
hashSet.contains(2);    // returns false (already removed)

Note:

    All values will be in the range of [0, 1000000].
    The number of operations will be in the range of [1, 10000].
    Please do not use the built-in HashSet library.
*/

/**
 * Runtime: 232 ms, faster than 22.01% of JavaScript online submissions for Design HashSet.
 * Memory Usage: 56.2 MB, less than 100.00% of JavaScript online submissions for Design HashSet.
 * Initialize your data structure here.
 */
const MyHashSet = function () {
    this.data = new Array(10000)
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
    const div = Math.floor(key / 100)
    const num = key % 10000
    if (!this.data[div]) {
        this.data[div] = new Array(100)
        this.data[div][num] = 1
    } else {
        this.data[div][num] = 1
    }
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
    const div = Math.floor(key / 100)
    if (!this.data[div]) {
        return
    }
    const num = key % 10000
    this.data[div][num] = undefined
}

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
    const div = Math.floor(key / 100)
    if (!this.data[div]) {
        return false
    }
    const num = key % 10000
    return this.data[div][num] === 1
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
