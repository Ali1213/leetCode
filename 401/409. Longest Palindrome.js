/*
Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

    This is case sensitive, for example "Aa" is not considered a palindrome here.

    Note:
Assume the length of given string will not exceed 1,010.

    Example:

Input:
    "abccccdd"

Output:
    7

Explanation:
    One longest palindrome that can be built is "dccaccd", whose length is 7.
*/
/**
 * Runtime: 64 ms, faster than 49.71% of JavaScript online submissions for Longest Palindrome.
 * Memory Usage: 35.2 MB, less than 100.00% of JavaScript online submissions for Longest Palindrome.
 * @param {string} s
 * @return {number}
 */
const longestPalindrome1 = function (s) {
    const arr = new Array(52);
    for (let i = 0; i < s.length; i++) {
        const code = s.charCodeAt(i) - 65;
        if (arr[code] === undefined) {
            arr[code] = 1;
        } else arr[code] += 1;
    }
    let code = 0;
    let hasLone = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== undefined) {
            if (arr[i] % 2 === 1) hasLone = 1;
            code += ((arr[i] >> 1) << 1);
        }
    }
    return code + hasLone;
};


/*
* Runtime: 56 ms, faster than 90.14% of JavaScript online submissions for Longest Palindrome.
* Memory Usage: 35 MB, less than 100.00% of JavaScript online submissions for Longest Palindrome.
* */
const longestPalindrome = function (s) {
    const arr = new Array(52);
    for (let i = 0; i < s.length; i++) {
        const code = s.charCodeAt(i) - 65;
        if (arr[code] === undefined) {
            arr[code] = 1;
        } else arr[code] += 1;
    }
    let code = 0;
    let hasLone = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== undefined) {
            const v = (arr[i] >> 1) << 1;
            if (arr[i] - v === 1) hasLone = 1;
            code += v;
        }
    }
    return code + hasLone;
};

const assert = require('assert');

const test = [
    ['Aabccccdd', 7],
    ['a', 1],
    ['AB', 1],
];


test.forEach(([A, r], index) => {
    try {
        assert.deepEqual(longestPalindrome(A), r);
    } catch (e) {
        console.log(`${index} occur error`);
        console.log(e);
        throw e;
    }
});
