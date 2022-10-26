// Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

// A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

// For example, "ace" is a subsequence of "abcde".
// A common subsequence of two strings is a subsequence that is common to both strings.


// Example 1:

// Input: text1 = "abcde", text2 = "ace"
// Output: 3
// Explanation: The longest common subsequence is "ace" and its length is 3.
// Example 2:

// Input: text1 = "abc", text2 = "abc"
// Output: 3
// Explanation: The longest common subsequence is "abc" and its length is 3.
// Example 3:

// Input: text1 = "abc", text2 = "def"
// Output: 0
// Explanation: There is no such common subsequence, so the result is 0.


// Constraints:

// 1 <= text1.length, text2.length <= 1000
// text1 and text2 consist of only lowercase English characters.


// Runtime: 96 ms, faster than 94.30% of JavaScript online submissions for Longest Common Subsequence.
// Memory Usage: 55.4 MB, less than 37.63% of JavaScript online submissions for Longest Common Subsequence.

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const longestCommonSubsequence1 = (text1, text2) => {
    const dp = new Array(text1.length + 1)
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(text2.length + 1)
        dp[i][0] = 0
    }
    dp[0].fill(0)

    for (let i = 1; i <= text1.length; i++) {
        for (let j = 1; j <= text2.length; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    return dp[text1.length][text2.length]
}


// Runtime: 131 ms, faster than 76.06% of JavaScript online submissions for Longest Common Subsequence.
// Memory Usage: 46.3 MB, less than 92.14% of JavaScript online submissions for Longest Common Subsequence.
const longestCommonSubsequence = (text1, text2) => {
    let prev = new Array(text2.length + 1)
    const now = new Array(text2.length + 1)
    prev.fill(0)
    now[0] = 0

    for (let i = 1; i <= text1.length; i++) {
        for (let j = 1; j <= text2.length; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                now[j] = prev[j - 1] + 1
            } else {
                now[j] = Math.max(prev[j], now[j - 1])
            }
        }
        prev = [...now]
    }
    return prev[text2.length]
}


const { normalTest } = require('../test')


const tests = [
    {
        params: ['abcde', 'ace'],
        result: 3,
    },
    {
        params: ['abc', 'abc'],
        result: 3,
    },
    {
        params: ['abc', 'def'],
        result: 0,
    },
]

normalTest(tests, longestCommonSubsequence)
normalTest(tests, longestCommonSubsequence1)
