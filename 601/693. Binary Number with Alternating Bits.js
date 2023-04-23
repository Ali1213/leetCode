/*
Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.

    Example 1:
Input: 5
Output: True
Explanation:
    The binary representation of 5 is: 101
Example 2:
Input: 7
Output: False
Explanation:
    The binary representation of 7 is: 111.
Example 3:
Input: 11
Output: False
Explanation:
    The binary representation of 11 is: 1011.
Example 4:
Input: 10
Output: True
Explanation:
    The binary representation of 10 is: 1010.
*/


/**
 * Runtime: 56 ms, faster than 68.42% of JavaScript online submissions for Binary Number with Alternating Bits.
 * Memory Usage: 33.9 MB, less than 50.00% of JavaScript online submissions for Binary Number with Alternating Bits.
 * @param {number} n
 * @return {boolean}
 */
const hasAlternatingBits = function (n) {
    let pos = n & 1;

    while (n > 0) {
        n >>= 1;
        const v = n & 1;
        if (v === pos) return false;
        pos = v;
    }
    return true;
};


const { normalTest } = require('../test/index');

const test = [
    {
        params: [5],
        result: true,
    },
    {
        params: [7],
        result: false,
    },
    {
        params: [11],
        result: false,
    },
    {
        params: [10],
        result: true,
    },
];

normalTest(test, hasAlternatingBits);
