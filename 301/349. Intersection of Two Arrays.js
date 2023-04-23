/*
Given two arrays, write a function to compute their intersection.

    Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Note:

    Each element in the result must be unique.
    The result can be in any order.
*/


/**
 * Runtime: 64 ms, faster than 34.65% of JavaScript online submissions for Intersection of Two Arrays.
 * Memory Usage: 34.3 MB, less than 53.85% of JavaScript online submissions for Intersection of Two Arrays.
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// const intersection = function (nums1, nums2) {
//     const s = new Set(nums1);
//     const result = new Set();
//     for (let i = 0; i < nums2.length; i += 1) {
//         if (s.has(nums2[i])) {
//             result.add(nums2[i]);
//         }
//     }
//     return [...result];
// };


/**
 * Runtime: 60 ms, faster than 55.59% of JavaScript online submissions for Intersection of Two Arrays.
 * Memory Usage: 34.1 MB, less than 92.31% of JavaScript online submissions for Intersection of Two Arrays.
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function (nums1, nums2) {
    const s = new Set(nums1);
    const result = [];
    for (let i = 0; i < nums2.length; i += 1) {
        if (s.has(nums2[i])) {
            result.push(nums2[i]);
            s.delete(nums2[i]);
        }
    }
    return result;
};

const assert = require('assert');

const test = [
    [[1, 2, 2, 1], [2, 2], [2]],
    [[4, 9, 5], [9, 4, 9, 8, 4], [9, 4]],
];


test.forEach(([A, B, r], index) => {
    try {
        assert.deepEqual(intersection(A, B), r);
    } catch (e) {
        console.log(`${index} occur error`);
        console.log(e);
        throw e;
    }
});
