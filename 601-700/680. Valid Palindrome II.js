/*
Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

    Example 1:
Input: "aba"
Output: True
Example 2:
Input: "abca"
Output: True
Explanation: You could delete the character 'c'.
    Note:
The string will only contain lowercase characters a-z. The maximum length of the string is 50000.
*/


/**
 * Runtime: 96 ms, faster than 34.65% of JavaScript online submissions for Valid Palindrome II.
 * Memory Usage: 42.7 MB, less than 75.00% of JavaScript online submissions for Valid Palindrome II.
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = function (s, bol = false) {
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        if (s[i] !== s[j]) {
            if (bol) return false;
            return validPalindrome(s.slice(i + 1, j+1), true) || validPalindrome(s.slice(i, j), true);
        }
        i += 1;
        j -= 1;
    }
    return true;
};


const { normalTest } = require('../test/index');

const test = [{
    params: ['aba'],
    result: true,
}, {
    params: ['abca'],
    result: true,
}];

normalTest(test, validPalindrome);
