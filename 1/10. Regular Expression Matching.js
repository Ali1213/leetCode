// Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

// '.' Matches any single character.​​​​
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).



// Example 1:

// Input: s = "aa", p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".
// Example 2:

// Input: s = "aa", p = "a*"
// Output: true
// Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
// Example 3:

// Input: s = "ab", p = ".*"
// Output: true
// Explanation: ".*" means "zero or more (*) of any character (.)".


// Constraints:

// 1 <= s.length <= 20
// 1 <= p.length <= 30
// s contains only lowercase English letters.
// p contains only lowercase English letters, '.', and '*'.
// It is guaranteed for each appearance of the character '*', there will be a previous valid character to match.

// Runtime: 1541 ms, faster than 5.00% of JavaScript online submissions for Regular Expression Matching.
// Memory Usage: 48.4 MB, less than 26.99% of JavaScript online submissions for Regular Expression Matching.
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    let store = {

    }
    var dp = (i, j)=> {
        if(store[`${i}-${j}`]){
            return store[`${i}-${j}`]
        }

        // if(!s[i] || !p[j]) return s[i] == p[j]
        
        if(j == p.length) return i == s.length
        // if(i >= s.length) return false

        const first = i < s.length &&( s[i] == p[j] || p[j] == '.')
        let ans 

        if (j <= p.length - 2 && p[j + 1] == "*") {
            ans = dp(i, j + 2) || first && dp(i+1, j)
        } else {
            ans = first && dp(i+1, j+1)
        }
        store[`${i}-${j}`] = ans
        return ans
    }
    return dp(0, 0)
};


const { normalTest } = require('../test')


const tests = [
    {
        params: ['aa', 'a'],
        result: false,
    },
    {
        params: ['aa', 'a*'],
        result: true,
    },
    {
        params: ['ab', '.*'],
        result: true,
    },
    {
        params: ['ab', '.*c'],
        result: false,
    },
]

normalTest(tests, isMatch)
