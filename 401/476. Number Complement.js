/*
Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.

    Note:
The given integer is guaranteed to fit within the range of a 32-bit signed integer.
    You could assume no leading zero bit in the integer’s binary representation.
    Example 1:
Input: 5
Output: 2
Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.
Example 2:
Input: 1
Output: 0
Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.
*/


/**
 * Runtime: 52 ms, faster than 77.22% of JavaScript online submissions for Number Complement.
 * Memory Usage: 33.9 MB, less than 100.00% of JavaScript online submissions for Number Complement.
 * @param {number} num
 * @return {number}
 */
const findComplement = function (num) {
    let r = 0;
    let pos = 0;
    while (num > 0) {
        if (num % 2 === 0) {
            r += (1 << pos);
        }
        num >>= 1;
        pos += 1;
    }
    return r;
};


const assert = require('assert');

const test = [
    [5, 2],
    [1, 0],
];


test.forEach(([A, r], index) => {
    try {
        assert.deepEqual(findComplement(A), r);
    } catch (e) {
        console.log(`${index} occur error`);
        console.log(e);
        throw e;
    }
});
