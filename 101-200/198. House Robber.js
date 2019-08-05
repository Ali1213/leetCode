/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

    Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

    Example 1:

Input: [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
    Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
    Total amount you can rob = 2 + 9 + 1 = 12.
*/


/**
 * Runtime: 52 ms, faster than 75.75% of JavaScript online submissions for House Robber.
 * Memory Usage: 33.7 MB, less than 99.01% of JavaScript online submissions for House Robber.
 * @param {number[]} nums
 * @return {number}
 */
// var rob = function (nums) {
//     let a = nums[0] || 0;
//     let b = 0;
//
//     for (let i = 1; i < nums.length; i++) {
//         if (i % 2 === 0) {
//             a = Math.max(b - nums[i-1] + nums[i], a + nums[i]);
//         } else {
//             b = Math.max(a - nums[i-1] + nums[i], b + nums[i]);
//         }
//     }
//
//
//     return Math.max(a, b)
// };



/**
 * 其实这个方法不是很懂
 * Runtime: 56 ms, faster than 53.93% of JavaScript online submissions for House Robber.
 * Memory Usage: 33.8 MB, less than 66.34% of JavaScript online submissions for House Robber.
 * @param {number[]} nums
 * @return {number}
 */
// var rob = function (nums) {
//     if(nums.length === 0) return 0;
//     if(nums.length === 1) return nums[0];
//     if(nums.length === 2) return Math.max(nums[1], nums[0]);
//
//     let maxPrev = nums[0];
//     let max = Math.max(nums[0], nums[1]);
//
//
//     for (let i = 2; i < nums.length; i++) {
//         let temp = max;
//         max = Math.max(max, maxPrev + nums[i]);
//         maxPrev = temp
//     }
//
//
//     return max
// };


/**
 * Runtime: 48 ms, faster than 90.12% of JavaScript online submissions for House Robber.
 * Memory Usage: 33.8 MB, less than 70.30% of JavaScript online submissions for House Robber.
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let a = 0;
    let b = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            a = Math.max(b, a + nums[i]);
        } else {
            b = Math.max(a, b + nums[i]);
        }
    }


    return Math.max(a,b )
};


const assert = require('assert');
var test = [
    [[1, 2, 3, 1], 4],
    [[2, 7, 9, 3, 1], 12],
    [[2, 1, 3, 5], 7],
    [[], 0],
];


test.forEach(([A, r], index) => {
    try {

        assert.deepEqual(rob(A), r)
    } catch (e) {
        console.log(`${index} occur error`);
        console.log(e)
        throw e;
    }
});
