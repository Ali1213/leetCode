/*
Write an algorithm to determine if a number is "happy".

    A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

    Example:

Input: 19
Output: true
Explanation:
    12 + 92 = 82
    82 + 22 = 68
    62 + 82 = 100
    12 + 02 + 02 = 1
*/


/**
 * Runtime: 56 ms, faster than 93.92% of JavaScript online submissions for Happy Number.
 * Memory Usage: 34.9 MB, less than 71.79% of JavaScript online submissions for Happy Number.
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function (n) {
    const s = new Set();
    let v = n;
    while (v !== 1) {
        if (s.has(v)) return false;
        s.add(v);

        let count = 0;
        while (v !== 0) {
            const now = v % 10;
            v = (v - now) / 10;
            count += Math.pow(now, 2);
        }
        v = count;
    }
    return true;
};


const assert = require('assert');

const test = [
    [19, true],
];


test.forEach(([A, r], index) => {
    try {
        assert.deepEqual(isHappy(A), r);
    } catch (e) {
        console.log(`${index} occur error`);
        console.log(e);
        throw e;
    }
});
