/*
Given two arrays, write a function to compute their intersection.

    Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Note:

    Each element in the result should appear as many times as it shows in both arrays.
    The result can be in any order.
    Follow up:

    What if the given array is already sorted? How would you optimize your algorithm?
    What if nums1's size is small compared to nums2's size? Which algorithm is better?
    What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
*/

/**
 * Runtime: 56 ms, faster than 83.86% of JavaScript online submissions for Intersection of Two Arrays II.
 * Memory Usage: 35.3 MB, less than 59.26% of JavaScript online submissions for Intersection of Two Arrays II.
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function (nums1, nums2) {
    if (nums1.length > nums2.length) {
        const tmp = nums1;
        nums1 = nums2;
        nums2 = tmp;
    }
    const a = new Map();
    for (let i = 0; i < nums1.length; i++) {
        const v = a.get(nums1[i]);
        a.set(nums1[i], v === undefined ? 1 : v + 1);
    }
    const r = [];
    for (let i = 0; i < nums2.length; i++) {
        const v = a.get(nums2[i]);
        if (v !== undefined) {
            r.push(nums2[i]);
            if (v === 1) {
                a.delete(nums2[i]);
            } else a.set(nums2[i], v - 1);
        }
    }
    return r;
};


const assert = require('assert');

const test = [
    [[1, 2, 2, 1], [2, 2], [2, 2]],
    [[4, 9, 5], [9, 4, 9, 8, 4], [4, 9]],
];


test.forEach(([A, B, r], index) => {
    try {
        assert.deepEqual(intersect(A, B), r);
    } catch (e) {
        console.log(`${index} occur error`);
        console.log(e);
        throw e;
    }
});
