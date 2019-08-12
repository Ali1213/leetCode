/*
Given an integer, write a function to determine if it is a power of two.

Example 1:

Input: 1
Output: true
Explanation: 20 = 1
Example 2:

Input: 16
Output: true
Explanation: 24 = 16
Example 3:

Input: 218
Output: false
*/


/**
 * Runtime: 68 ms, faster than 83.89% of JavaScript online submissions for Power of Two.
 * Memory Usage: 35.9 MB, less than 15.38% of JavaScript online submissions for Power of Two.
 * @param {number} n
 * @return {boolean}
 */
// var isPowerOfTwo = function (n) {
//     if (n < 1) return false;
//     let count = n;
//     let next = count >> 1;
//     while (true) {
//         if (count === 1) return true;
//         if (count !== (next << 1)) return false
//         count = next;
//         next = count >> 1;
//     }
//
//     return false;
// };

/**
 * Runtime: 68 ms, faster than 83.89% of JavaScript online submissions for Power of Two.
 * Memory Usage: 35.7 MB, less than 23.08% of JavaScript online submissions for Power of Two.
 * @param {number} n
 * @return {boolean}
 */

var isPowerOfTwo = function (n) {
    let i = 1;

    while(i < n && i > 0){
        i = i << 1
    }

    return i === n;
};

const assert = require('assert');
var test = [
    [1, true],
    [16, true],
    [218, false],
    [1073741825, false],
];


test.forEach(([A, r], index) => {
    try {

        assert.deepEqual(isPowerOfTwo(A), r)
    } catch (e) {
        console.log(`${index} occur error`);
        console.log(e)
        throw e;
    }
});
