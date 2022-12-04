// You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

// Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

// 0 <= j <= nums[i] and
// i + j < n
// Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].


// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [2,3,0,1,4]
// Output: 2


// Constraints:

// 1 <= nums.length <= 104
// 0 <= nums[i] <= 1000


// Runtime: 111 ms, faster than 56.49% of JavaScript online submissions for Jump Game II.
// Memory Usage: 43.7 MB, less than 89.59% of JavaScript online submissions for Jump Game II.
/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = (nums) => {
    let jumpTimes = 0
    let canJump = 0
    let canFarst = 0
    for (let i = 0; i < nums.length - 1; i++) {
        canFarst = Math.max(canFarst, i + nums[i])
        if (i === canJump) {
            jumpTimes++
            canJump = canFarst
        }
    }
    return jumpTimes
}


const { normalTest } = require('../test')


const tests = [
    {
        params: [[2, 3, 1, 1, 4]],
        result: 2,
    },
    {
        params: [[2, 3, 0, 1, 4]],
        result: 2,
    },
]

normalTest(tests, jump)
