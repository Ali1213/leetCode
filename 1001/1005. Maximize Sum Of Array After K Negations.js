

// Share
// Given an integer array nums and an integer k, modify the array in the following way:

// choose an index i and replace nums[i] with -nums[i].
// You should apply this process exactly k times. You may choose the same index i multiple times.

// Return the largest possible sum of the array after modifying it in this way.



// Example 1:

// Input: nums = [4,2,3], k = 1
// Output: 5
// Explanation: Choose index 1 and nums becomes [4,-2,3].
// Example 2:

// Input: nums = [3,-1,0,2], k = 3
// Output: 6
// Explanation: Choose indices (1, 2, 2) and nums becomes [3,1,0,2].
// Example 3:

// Input: nums = [2,-3,-1,5,-4], k = 2
// Output: 13
// Explanation: Choose indices (1, 4) and nums becomes [2,3,-1,5,4].


// Constraints:

// 1 <= nums.length <= 104
// -100 <= nums[i] <= 100
// 1 <= k <= 104


// Runtime: 71 ms, faster than 94.51% of JavaScript online submissions for Maximize Sum Of Array After K Negations.
// Memory Usage: 42.5 MB, less than 94.51% of JavaScript online submissions for Maximize Sum Of Array After K Negations.
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
    let neg = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            neg += 1
        }
    }
    let sum = 0
    if (neg >= k) {
        const sorted = nums.sort((a, b) => {
            return a - b
        })
        for (let i = 0; i < nums.length; i++) {
            if (k > 0) {
                sum += -sorted[i]
                k -= 1
            } else {
                sum += sorted[i]
            }
        }
        return sum
    }
    let noNeg = nums.map(item => item < 0 ? -item : item)
    k = k - neg

    for (let i = 0; i < noNeg.length; i++) {
        sum += noNeg[i]
    }
    if (k % 2 == 0) {
        return sum
    }
    
    const min = Math.min(...noNeg)
    sum = sum - min - min
    return sum
};



const { normalTest } = require('../test')


const tests = [
    {
        params: [[4, 2, 3], 1],
        result: 5,
    },
    {
        params: [[3, -1, 0, 2], 3],
        result: 6,
    },
    {
        params: [[2, -3, -1, 5, -4], 2],
        result: 13,
    },
    {
        params: [[-8, 3, -5, -3, -5, -2], 6],
        result: 22,
    },
]

normalTest(tests, largestSumAfterKNegations)
