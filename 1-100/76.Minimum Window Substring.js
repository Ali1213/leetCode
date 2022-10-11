// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// A substring is a contiguous sequence of characters within the string.


// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.


// Constraints:

// m == s.length
// n == t.length
// 1 <= m, n <= 105
// s and t consist of uppercase and lowercase English letters.


// Follow up: Could you find an algorithm that runs in O(m + n) time?

// Runtime: 157 ms, faster than 53.72% of JavaScript online submissions for Minimum Window Substring.
// Memory Usage: 45.5 MB, less than 67.84% of JavaScript online submissions for Minimum Window Substring.

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t) => {
    let left = 0
    let right = 0
    let sub = ''
    const m = {

    }
    let valid = t.length

    for (let i = 0; i < t.length; i++) {
        m[t[i]] = m[t[i]] ? m[t[i]] + 1 : 1
    }

    while (right < s.length) {
        if (m[s[right]] !== undefined) {
            if (m[s[right]] > 0) {
                valid--
            }
            m[s[right]]--
        }
        right += 1
        // console.log(left, right, valid, m)
        while (valid === 0 && left < right) {
            // console.log(left, right, valid, m, m[s[left]])
            if (sub === '' || sub.length > right - left) {
                // console.log(s.substring(left, right))
                sub = s.substring(left, right)
            }
            if (m[s[left]] !== undefined) {
                if (m[s[left]] >= 0) {
                    valid++
                }
                m[s[left]]++
            }
            left += 1
        }
    }
    return sub
}


const { normalTest } = require('../test')


const tests = [
    {
        params: ['ADOBECODEBANC', 'ABC'],
        result: 'BANC',
    },
    {
        params: ['a', 'a'],
        result: 'a',
    },
    {
        params: ['a', 'aa'],
        result: '',
    },
    {
        params: ['ab', 'a'],
        result: 'a',
    },
]

normalTest(tests, minWindow)
