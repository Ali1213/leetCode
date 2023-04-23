/*
We define the Perfect Number is a positive integer that is equal to the sum of all its positive divisors except itself.

Now, given an integer n, write a function that returns true when it is a perfect number and false when it is not.
Example:
Input: 28
Output: True
Explanation: 28 = 1 + 2 + 4 + 7 + 14
Note: The input number n will not exceed 100,000,000. (1e8)
*/

/**
 * Runtime: 1800 ms, faster than 60.05% of JavaScript online submissions for Perfect Number.
 * Memory Usage: 34.4 MB, less than 100.00% of JavaScript online submissions for Perfect Number.
 * @param {number} num
 * @return {boolean}
 */
const checkPerfectNumber1 = (num) => {
    let total = 1;

    let i = Math.floor(num / 2);
    while (i > 1) {
        if (num % i === 0) {
            total += i;
            if (total > num) return false;
        }
        i -= 1;
    }
    return num === total && num !== 1;
};

/**
 * Runtime: 52 ms, faster than 95.40% of JavaScript online submissions for Perfect Number.
 * Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions for Perfect Number.
 */
const checkPerfectNumber2 = (num) => [6, 28, 496, 8128, 33550336].includes(num);

/**
 * Runtime: 48 ms, faster than 98.79% of JavaScript online submissions for Perfect Number.
 * Memory Usage: 33.9 MB, less than 100.00% of JavaScript online submissions for Perfect Number.
 */
const checkPerfectNumber = (num) => {
    const s = [2, 3, 5, 7, 13, 17, 19, 31];

    for (let i = 0; i < s.length; i += 1) {
        if ((1 << (s[i] - 1)) * ((1 << s[i]) - 1) === num) {
            return true;
        }
    }
    return false;
};


const assert = require('assert');

const test = [
    [28, true],
    [14, false],
    [100000000, false],
    [1, false],
];


test.forEach(([A, r], index) => {
    try {
        assert.deepEqual(checkPerfectNumber(A), r);
    } catch (e) {
        console.log(`${index} occur error`);
        console.log(e);
        throw e;
    }
});
