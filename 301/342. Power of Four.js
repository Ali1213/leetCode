/*
Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

Example 1:

Input: 16
Output: true
Example 2:

Input: 5
Output: false
Follow up: Could you solve it without loops/recursion?
*/

/**
 * Runtime: 56 ms, faster than 98.81% of JavaScript online submissions for Power of Four.
 * Memory Usage: 35.6 MB, less than 100.00% of JavaScript online submissions for Power of Four.
 * @param {number} num
 * @return {boolean}
 */
const isPowerOfFour = function (num) {
    return num > 0 && 4294967296 % 4 === 0 && Math.log2(num) % 2 === 0;
};


const assert = require('assert');

const test = [
    [8, false],
    [16, true],
    [5, false],
];


test.forEach(([A, r], index) => {
    try {
        assert.deepEqual(isPowerOfFour(A), r);
    } catch (e) {
        console.log(`${index} occur error`);
        console.log(e);
        throw e;
    }
});
