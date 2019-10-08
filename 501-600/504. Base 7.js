/*
Given an integer, return its base 7 string representation.

Example 1:
Input: 100
Output: "202"
Example 2:
Input: -7
Output: "-10"
Note: The input will be in range of [-1e7, 1e7].
*/


/**
 * https://leetcode.com/problems/base-7/
 * Runtime: 64 ms, faster than 22.64% of JavaScript online submissions for Base 7.
 * Memory Usage: 33.9 MB, less than 50.00% of JavaScript online submissions for Base 7.
 * @param {number} num
 * @return {string}
 */
const convertToBase71 = function (num) {
    if (num === 0) return '0';
    let isLessThenZero = false;
    if (num < 0) {
        num = -num;
        isLessThenZero = true;
    }
    let v = '';
    while (num > 0) {
        const k = num % 7;
        v = k + v;
        num = (num - k) / 7;
    }

    return isLessThenZero ? `-${v}` : v;
};



const convertToBase7 = function (num) {
    return num.toString(7)
};

const assert = require('assert');

const test = [
    [100, '202'],
    [-7, '-10'],
    [0, '0'],
];


test.forEach(([A, r], index) => {
    try {
        assert.deepEqual(convertToBase7(A), r);
    } catch (e) {
        console.log(`${index} occur error`);
        console.log(e);
        throw e;
    }
});
