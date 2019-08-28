/*
Given a positive integer num, write a function which returns True if num is a perfect square else False.

Note: Do not use any built-in library function such as sqrt.

Example 1:

Input: 16
Output: true
Example 2:

Input: 14
Output: false
*/

/**
 * Runtime: 60 ms, faster than 39.01% of JavaScript online submissions for Valid Perfect Square.
 * Memory Usage: 35.3 MB, less than 25.00% of JavaScript online submissions for Valid Perfect Square.
 * @param {number} num
 * @return {boolean}
 */
// eslint-disable-next-line func-names
const isPerfectSquare = function (num) {
    if (num < 1) return false;
    if (num === 1) return true;
    let start = 2;
    let end = Math.floor(num / 2);
    while (start < end) {
        const mid = Math.floor((start + end) / 2);
        const m = mid * mid;
        if (m === num) return true;
        if (m > num) {
            end = mid;
        } else if (mid === start) {
            start += 1;
        } else {
            start = mid;
        }
        console.log(start, end);
    }
    return start * start === num;
};


const assert = require('assert');

const test = [
    [0, false],
    [1, true],
    [16, true],
    [14, false],
];


test.forEach(([A, r], index) => {
    try {
        assert.deepEqual(isPerfectSquare(A), r);
    } catch (e) {
        console.log(`${index} occur error`);
        console.log(e);
        throw e;
    }
});
