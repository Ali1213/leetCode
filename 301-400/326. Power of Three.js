/*
Given an integer, write a function to determine if it is a power of three.

    Example 1:

Input: 27
Output: true
Example 2:

Input: 0
Output: false
Example 3:

Input: 9
Output: true
Example 4:

Input: 45
Output: false
Follow up:
    Could you do it without using any loop / recursion?
*/


/**
 * Runtime: 220 ms, faster than 50.94% of JavaScript online submissions for Power of Three.
 * Memory Usage: 47.9 MB, less than 60.00% of JavaScript online submissions for Power of Three.
 * @param {number} n
 * @return {boolean}
 */
// var isPowerOfThree = function(n) {
//     return n > 0 && Math.pow(3,19) % n === 0
// };


/**
 * Runtime: 204 ms, faster than 81.87% of JavaScript online submissions for Power of Three.
 * Memory Usage: 48.3 MB, less than 20.00% of JavaScript online submissions for Power of Three.* @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = function (n) {
    return n > 0 && 1162261467 % n === 0;
};

const assert = require('assert');

const test = [
    [27, true],
    [0, false],
    [9, true],
    [45, false],
];


test.forEach(([A, r], index) => {
    try {
        assert.deepEqual(isPowerOfThree(A), r);
    } catch (e) {
        console.log(`${index} occur error`);
        console.log(e);
        throw e;
    }
});
