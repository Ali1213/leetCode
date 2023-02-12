// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.


// Example 1:

// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:

// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false


// Constraints:

// 1 <= s.length <= 300
// 1 <= wordDict.length <= 1000
// 1 <= wordDict[i].length <= 20
// s and wordDict[i] consist of only lowercase English letters.
// All the strings of wordDict are unique.

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = function (s, wordDict) {
    const set = new Set(wordDict)
    const dp = new Array(s.length + 1)
    dp[0] = true
    for (let i = 1; i <= s.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            dp[i] = dp[j] && set.has(s.substring(j, i))
            if (dp[i]) break
        }
    }
    return dp[s.length]
}


const { normalTest } = require('../test')


const tests = [
    {
        params: ['leetcode', ['leet', 'code']],
        result: true,
    },
    {
        params: ['applepenapple', ['apple', 'pen']],
        result: true,
    },
    {
        params: ['catsandog', ['cats', 'dog', 'sand', 'and', 'cat']],
        result: false,
    },
]

normalTest(tests, wordBreak)
