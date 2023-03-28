/* Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
*/


/**
 * Runtime: 76 ms, faster than 87.22% of JavaScript online submissions for Longest Palindromic Substring.
 * Memory Usage: 35.5 MB, less than 86.96% of JavaScript online submissions for Longest Palindromic Substring.
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
    if (s === '') return ''
    let start = 0
    let end = 0
    for (let i = 0; i < s.length; i++) {
        const len1 = getLen(s, i, i)
        const len2 = getLen(s, i, i + 1)
        const max = Math.max(len1, len2)
        if (max > end - start) {
            start = i - Math.floor((max - 1) / 2)
            end = i + Math.floor(max / 2)
        }
    }
    return s.substring(start, end + 1)
    function getLen(str, i, j) {
        let l = i
        let r = j
        while (l >= 0 && r < str.length && str[l] === str[r]) {
            l -= 1
            r += 1
        }
        return r - l - 1
    }
}

const { normalTest } = require('../test')


const tests = [
    // {
    //     params: ['babad'],
    //     result: 'bab',
    // },
    {
        params: ['cbbd'],
        result: 'bb',
    }]

normalTest(tests, longestPalindrome)
