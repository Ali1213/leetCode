/*
Given a positive integer N, find and return the longest distance between two consecutive 1's in the binary representation of N.

If there aren't two consecutive 1's, return 0.


Example 1:

Input: 22
Output: 2
Explanation:
    22 in binary is 0b10110.
    In the binary representation of 22, there are three ones, and two consecutive pairs of 1's.
The first consecutive pair of 1's have distance 2.
The second consecutive pair of 1's have distance 1.
The answer is the largest of these two distances, which is 2.
Example 2:

Input: 5
Output: 2
Explanation:
    5 in binary is 0b101.
    Example 3:

Input: 6
Output: 1
Explanation:
    6 in binary is 0b110.
    Example 4:

Input: 8
Output: 0
Explanation:
    8 in binary is 0b1000.
    There aren't any consecutive pairs of 1's in the binary representation of 8, so we return 0.


Note:

    1 <= N <= 10^9
*/

/**
 * Runtime: 52 ms, faster than 84.54% of JavaScript online submissions for Binary Gap.
 * Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions for Binary Gap.
 * @param {number} N
 * @return {number}
 */
const binaryGap = function (N) {
    let itl = 1
    let count = 1
    let has1 = 0
    while (N > 0) {
        let n = N & 1
        N = N >> 1
        if (n === 1) {
            itl = Math.max(count, itl)
            count = 1
            has1 += 1
        } else {
            if (has1) count += 1
        }
    }
    return has1 > 1 ? itl : 0
}


const {normalTest} = require('../test/index')

const test = [
    {
        params: [22],
        result: 2,
    },
    {
        params: [5],
        result: 2,
    },
    {
        params: [6],
        result: 1,
    },
    {
        params: [8],
        result: 0,
    },
]

normalTest(test, binaryGap)
