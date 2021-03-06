/*
Given two strings s and t which consist of only lowercase letters.

    String t is generated by random shuffling string s and then add one more letter at a random position.

    Find the letter that was added in t.

    Example:

Input:
    s = "abcd"
t = "abcde"

Output:
    e

Explanation:
    'e' is the letter that was added.
*/


/**
 * Runtime: 60 ms, faster than 74.71% of JavaScript online submissions for Find the Difference.
 * Memory Usage: 35.5 MB, less than 100.00% of JavaScript online submissions for Find the Difference.
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = function (s, t) {
    const a = new Array(26);
    for (let i = 0; i < s.length; i += 1) {
        const c = s.charCodeAt(i) - 97;
        a[c] = a[c] ? a[c] + 1 : 1;
    }

    for (let i = 0; i < t.length; i += 1) {
        if (!a[t.charCodeAt(i) - 97]) return t[i];
        a[t.charCodeAt(i) - 97] -= 1;
    }
};


const assert = require('assert');

const test = [
    ['abcd', 'abcde', 'e'],
    ['abcd', 'abdce', 'e'],
];


test.forEach(([A, B, r], index) => {
    try {
        assert.deepEqual(findTheDifference(A, B), r);
    } catch (e) {
        console.log(`${index} occur error`);
        console.log(e);
        throw e;
    }
});
