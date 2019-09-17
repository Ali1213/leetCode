/*
Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.


Example 1:

Input: "abab"
Output: True
Explanation: It's the substring "ab" twice.
Example 2:

Input: "aba"
Output: False
Example 3:

Input: "abcabcabcabc"
Output: True
Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)
*/

/**
 * Runtime: 72 ms, faster than 71.98% of JavaScript online submissions for Repeated Substring Pattern.
 * Memory Usage: 38 MB, less than 33.33% of JavaScript online submissions for Repeated Substring Pattern.
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = function (s) {
    const len = s.length;
    if (len < 2) return false;
    let start = 1;
    while (start <= len / 2) {
        if (len % start === 0) {
            if (s === s.substring(0, start).repeat(len / start)) return true;
        }
        start += 1;
    }
    return false;
};


const assert = require('assert');

const test = [
    ['abab', true],
    ['aba', false],
    ['abcabcabcabc', true],
    ['bb', true],
    ['ababab', true],
    ['zzz', true],
];


test.forEach(([A, r], index) => {
    try {
        assert.deepEqual(repeatedSubstringPattern(A), r);
    } catch (e) {
        console.log(`${index} occur error`);
        console.log(e);
        throw e;
    }
});
