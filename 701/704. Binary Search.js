/*
Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.


Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1


Note:

    You may assume that all elements in nums are unique.
    n will be in the range [1, 10000].
    The value of each element in nums will be in the range [-9999, 9999].
*/

/**
 * Runtime: 80 ms, faster than 6.16% of JavaScript online submissions for Binary Search.
 * Memory Usage: 37 MB, less than 42.86% of JavaScript online submissions for Binary Search.
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search1 = function (nums, target) {
    let start = 0
    let end = nums.length - 1

    while (start < end) {
        const len = Math.floor((start + end) / 2)
        if (nums[len] === target) return len
        if (nums[len] < target) {
            start = start === len ? start + 1 : len
        } else {
            end = len
        }
    }

    return nums[start] === target ? start : -1
}

/**
 * Runtime: 56 ms, faster than 88.94% of JavaScript online submissions for Binary Search.
 * Memory Usage: 36.8 MB, less than 64.29% of JavaScript online submissions for Binary Search.
 */
const search = function (nums, target) {
    let start = 0
    let end = nums.length - 1

    while (start <= end) {
        const len = start + ((end - start) >> 2)
        if (nums[len] === target) return len
        if (nums[len] < target) {
            start = len + 1
        } else {
            end = len - 1
        }
    }

    return -1
}

const {normalTest} = require('../test/index')

const test = [
    {
        params: [[-1, 0, 3, 5, 9, 12], 9],
        result: 4,
    },
    {
        params: [[-1, 0, 3, 5, 9, 12], 2],
        result: -1,
    },
    {
        params: [[5], 5],
        result: 0,
    },
]

normalTest(test, search)
