// Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.

// An interleaving of two strings s and t is a configuration where s and t are divided into n and m substrings respectively, such that:

// s = s1 + s2 + ... + sn
// t = t1 + t2 + ... + tm
// |n - m| <= 1
// The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...
// Note: a + b is the concatenation of strings a and b.


// Example 1:


// Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
// Output: true
// Explanation: One way to obtain s3 is:
// Split s1 into s1 = "aa" + "bc" + "c", and s2 into s2 = "dbbc" + "a".
// Interleaving the two splits, we get "aa" + "dbbc" + "bc" + "a" + "c" = "aadbbcbcac".
// Since s3 can be obtained by interleaving s1 and s2, we return true.
// Example 2:

// Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
// Output: false
// Explanation: Notice how it is impossible to interleave s2 with any other string to obtain s3.
// Example 3:

// Input: s1 = "", s2 = "", s3 = ""
// Output: true


// Constraints:

// 0 <= s1.length, s2.length <= 100
// 0 <= s3.length <= 200
// s1, s2, and s3 consist of lowercase English letters.


// Follow up: Could you solve it using only O(s2.length) additional memory space?

// Runtime: 156 ms, faster than 14.33% of JavaScript online submissions for Interleaving String.
// Memory Usage: 46.1 MB, less than 29.85% of JavaScript online submissions for Interleaving String.
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
const isInterleave = (s1, s2, s3) => {
    if (s1.length + s2.length !== s3.length) return false
    const dp = new Array(s2.length + 1)
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(s1.length + 1)
    }
    dp[0][0] = true
    for (let i = 1; i < dp[0].length; i++) {
        dp[0][i] = dp[0][i - 1] && s1[i - 1] === s3[i - 1]
    }
    for (let i = 1; i < dp.length; i++) {
        dp[i][0] = dp[i - 1][0] && s2[i - 1] === s3[i - 1]
    }

    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[0].length; j++) {
            dp[i][j] = (dp[i - 1][j] && s2[i - 1] === s3[i + j - 1])
                        || (dp[i][j - 1] && s1[j - 1] === s3[i + j - 1])
        }
    }
    return dp[s2.length][s1.length]
}


const { normalTest } = require('../test')


const tests = [
    {
        params: ['aabcc', 'dbbca', 'aadbbcbcac'],
        result: true,
    },
    {
        params: ['aabcc', 'dbbca', 'aadbbbaccc'],
        result: false,
    },
    {
        params: ['', '', ''],
        result: true,
    },
    {
        params: ['', '', 'a'],
        result: false,
    },
    {
        params: ['a',
            '',
            'a'],
        result: true,
    },
]

normalTest(tests, isInterleave)
