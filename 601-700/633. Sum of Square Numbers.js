/*
Given a non-negative integer c, your task is to decide whether there're two integers a and b such that a2 + b2 = c.

Example 1:

Input: 5
Output: True
Explanation: 1 * 1 + 2 * 2 = 5


Example 2:

Input: 3
Output: False
*/

/**
 * Runtime: 56 ms, faster than 91.90% of JavaScript online submissions for Sum of Square Numbers.
 * Memory Usage: 34.6 MB, less than 66.67% of JavaScript online submissions for Sum of Square Numbers.
 * @param {number} c
 * @return {boolean}
 */
const judgeSquareSum = function (c) {
    if(c < 0) return false;
    if(c < 2) return true;
    let min = 0;
    let max = Math.floor(Math.sqrt(c));
    while (min <= max) {
        const v = min * min + max * max;
        if (v > c) {
            max -= 1;
        } else if (v < c) {
            min += 1;
        } else {
            return true;
        }
    }
    return false;
};


const { normalTest } = require('../test/index');

const test = [{
    params: [5],
    result: true,
}, {
    params: [3],
    result: false,
}, {
    params: [4],
    result: true,
}, {
    params: [1],
    result: true,
}, {
    params: [100],
    result: true,
}];

normalTest(test, judgeSquareSum);
