// Given a string s, find the longest palindromic subsequence's length in s.

// A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.


// Example 1:

// Input: s = "bbbab"
// Output: 4
// Explanation: One possible longest palindromic subsequence is "bbbb".
// Example 2:

// Input: s = "cbbd"
// Output: 2
// Explanation: One possible longest palindromic subsequence is "bb".


// Constraints:

// 1 <= s.length <= 1000
// s consists only of lowercase English letters.

// Runtime: 336 ms, faster than 61.57% of JavaScript online submissions for Longest Palindromic Subsequence.
// Memory Usage: 88.8 MB, less than 48.63% of JavaScript online submissions for Longest Palindromic Subsequence.
/**
 * @param {string} s
 * @return {number}
 */
const longestPalindromeSubseq = (s) => {
    const dp = new Array(s.length)
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(s.length)
        dp[i][i] = 1
        // if (i > 0) {
        //     dp[i][i - 1] = 0
        // }
    }

    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = i + 1; j < s.length; j++) {
            if (s[i] === s[j]) {
                dp[i][j] = (dp[i + 1][j - 1] || 0) + 2
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
            }
        }
    }
    return dp[0][s.length - 1]
}

const { normalTest } = require('../test')


const tests = [
    {
        params: ['bbbab'],
        result: 4,
    },
    {
        params: ['cbbd'],
        result: 2,
    },
]

normalTest(tests, longestPalindromeSubseq)
