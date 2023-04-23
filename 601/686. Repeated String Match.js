/*
Given two strings A and B, find the minimum number of times A has to be repeated such that B is a substring of it. If no such solution, return -1.

For example, with A = "abcd" and B = "cdabcdab".

    Return 3, because by repeating A three times (“abcdabcdabcd”), B is a substring of it; and B is not a substring of A repeated two times ("abcdabcd").

    Note:
The length of A and B will be between 1 and 10000.
*/


/**
 * Runtime: 48 ms, faster than 98.67% of JavaScript online submissions for Repeated String Match.
 * Memory Usage: 35.1 MB, less than 25.00% of JavaScript online submissions for Repeated String Match.
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
const repeatedStringMatch = function (A, B) {
    if (B.length <= A.length) {
        if (A.includes(B)) return 1;
        if (A.repeat(2).includes(B)) return 2;
        return -1;
    }

    let firstpos = B.indexOf(A);
    if (firstpos === -1) {
        if (A.repeat(2).includes(B)) return 2;
        return -1;
    }
    let total;
    if (firstpos === 0) {
        total = 1;
    } else if (A.slice(-firstpos) !== B.substring(0, firstpos)) {
        return -1;
    } else {
        total = 2;
    }
    firstpos += A.length;
    while (firstpos + A.length <= B.length) {
        if (B.slice(firstpos, firstpos + A.length) !== A) return -1;
        firstpos += A.length;
        total += 1;
    }
    if (firstpos === B.length) return total;
    if (A.substring(0, B.length - firstpos) !== B.substring(firstpos)) return -1;
    return total + 1;
};


const { normalTest } = require('../test/index');

const test = [
    {
        params: ['abcd', 'cdabcdab'],
        result: 3,
    },
    {
        params: ['a', 'aa'],
        result: 2,
    },
    {
        params: ['abcd', 'bcdab'],
        result: 2,
    },
];

normalTest(test, repeatedStringMatch);
