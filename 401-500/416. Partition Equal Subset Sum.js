// Given a non-empty array nums containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.


// Example 1:

// Input: nums = [1,5,11,5]
// Output: true
// Explanation: The array can be partitioned as [1, 5, 5] and [11].
// Example 2:

// Input: nums = [1,2,3,5]
// Output: false
// Explanation: The array cannot be partitioned into equal sum subsets.


// Constraints:

// 1 <= nums.length <= 200
// 1 <= nums[i] <= 100

// Runtime: 229 ms, faster than 74.50% of JavaScript online submissions for Partition Equal Subset Sum.
// Memory Usage: 43.3 MB, less than 97.77% of JavaScript online submissions for Partition Equal Subset Sum.
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canPartition = (nums) => {
    let total = nums.reduce((prev, item) => prev + item)
    if (total % 2 !== 0) {
        return false
    }
    total /= 2
    const dp = new Array(total + 1)
    dp.fill(false)
    dp[0] = true
    for (let i = 0; i < nums.length; i++) {
        for (let j = total; j >= 0; j--) {
            if (j - nums[i] >= 0) {
                dp[j] = dp[j] || dp[j - nums[i]]
            }
        }
    }
    return dp[total]
}

const { normalTest } = require('../test')


const tests = [
    {
        params: [[1, 5, 11, 5]],
        result: true,
    }, {
        params: [[1, 2, 3, 5]],
        result: false,
    }]

normalTest(tests, canPartition)
