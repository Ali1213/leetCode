/*
You are given two arrays (without duplicates) nums1 and nums2 where nums1’s elements are subset of nums2. Find all the next greater numbers for nums1's elements in the corresponding places of nums2.

The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2. If it does not exist, output -1 for this number.

    Example 1:
Input: nums1 = [4,1,2], nums2 = [1,3,4,2].
    Output: [-1,3,-1]
Explanation:
    For number 4 in the first array, you cannot find the next greater number for it in the second array, so output -1.
For number 1 in the first array, the next greater number for it in the second array is 3.
For number 2 in the first array, there is no next greater number for it in the second array, so output -1.
Example 2:
Input: nums1 = [2,4], nums2 = [1,2,3,4].
    Output: [3,-1]
Explanation:
    For number 2 in the first array, the next greater number for it in the second array is 3.
For number 4 in the first array, there is no next greater number for it in the second array, so output -1.
Note:
    All elements in nums1 and nums2 are unique.
    The length of both nums1 and nums2 would not exceed 1000.
*/


/**
 * Runtime: 64 ms, faster than 53.45% of JavaScript online submissions for Next Greater Element I.
 * Memory Usage: 35.5 MB, less than 100.00% of JavaScript online submissions for Next Greater Element I.
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement = function (nums1, nums2) {
    const map = new Map();
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = nums2.length - 1; i >= 0; i -= 1) {
        if (nums2[i] > max) {
            map.set(nums2[i], -1);
            max = nums2[i];
        } else {
            let j = i + 1;
            while (j < nums2.length) {
                if (nums2[j] > nums2[i]) {
                    map.set(nums2[i], nums2[j]);
                    break;
                }
                j += 1;
            }
        }
    }

    const arr = new Array(nums1.length);

    for (let i = 0; i < nums1.length; i++) {
        arr[i] = map.get(nums1[i]);
    }
    return arr;
};


const assert = require('assert');

const test = [
    [[4, 1, 2], [1, 3, 4, 2], [-1, 3, -1]],
    [[2, 4], [1, 2, 3, 4], [3, -1]],
    [[3, 1, 5, 7, 9, 2, 6], [1, 2, 3, 5, 6, 7, 9, 11], [5, 2, 6, 9, 11, 3, 7]],
];


test.forEach(([A, B, r], index) => {
    try {
        assert.deepEqual(nextGreaterElement(A, B), r);
    } catch (e) {
        console.log(`${index} occur error`);
        console.log(e);
        throw e;
    }
});
