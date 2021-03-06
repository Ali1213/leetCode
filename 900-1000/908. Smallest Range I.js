/*
Given an array A of integers, for each integer A[i] we may choose any x with -K <= x <= K, and add x to A[i].

    After this process, we have some array B.

    Return the smallest possible difference between the maximum value of B and the minimum value of B.



    Example 1:

Input: A = [1], K = 0
Output: 0
Explanation: B = [1]
Example 2:

Input: A = [0,10], K = 2
Output: 6
Explanation: B = [2,8]
Example 3:

Input: A = [1,3,6], K = 3
Output: 0
Explanation: B = [3,3,3] or B = [4,4,4]


Note:

    1 <= A.length <= 10000
0 <= A[i] <= 10000
0 <= K <= 10000
*/


/**
 * Runtime: 56 ms, faster than 87.84% of JavaScript online submissions for Smallest Range I.
 * Memory Usage: 35.5 MB, less than 100.00% of JavaScript online submissions for Smallest Range I.
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function (A, K) {
    return Math.max(0, Math.max(...A) - Math.min(...A) - 2 * K)
}


const {normalTest} = require('../test/index')

const test = [
    {
        params: [[1], 0],
        result: 0,
    },
    {
        params: [[0, 10], 2],
        result: 6,
    },
    {
        params: [[1, 3, 6], 3],
        result: 0,
    },
]

normalTest(test, smallestRangeI)
