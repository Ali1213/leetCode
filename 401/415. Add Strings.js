/*
Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

    Note:

The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
    You must not use any built-in BigInteger library or convert the inputs to integer directly.
*/


/**
 * Runtime: 56 ms, faster than 96.97% of JavaScript online submissions for Add Strings.
 * Memory Usage: 36.1 MB, less than 62.50% of JavaScript online submissions for Add Strings.
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = function (num1, num2) {
    const len = num1.length > num2.length ? num1.length : num2.length;
    let r = '';
    let i = 0;
    let total = 0;
    while (i < len || total !== 0) {
        let pos = 0;
        if (num1.length - i > 0) {
            pos += num1.charCodeAt(num1.length - i - 1) - 48;
        }
        if (num2.length - i > 0) {
            pos += num2.charCodeAt(num2.length - i - 1) - 48;
        }

        pos += total;

        total = 0;
        if (pos > 9) {
            r = String(pos - 10) + r;
            total = 1;
        } else {
            r = String(pos) + r;
        }
        i++;
    }
    return r || '0';
};


const assert = require('assert');

const test = [
    ['0', '0', '0'],
    ['5999', '6999', '12998'],
    ['5999', '999', '6998'],
];


test.forEach(([A, B, r], index) => {
    try {
        assert.deepEqual(addStrings(A, B), r);
    } catch (e) {
        console.log(`${index} occur error`);
        console.log(e);
        throw e;
    }
});
