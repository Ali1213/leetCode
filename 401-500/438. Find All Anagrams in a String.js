// Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


// Example 1:

// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
// Example 2:

// Input: s = "abab", p = "ab"
// Output: [0,1,2]
// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".


// Constraints:

// 1 <= s.length, p.length <= 3 * 104
// s and p consist of lowercase English letters.

// Runtime: 106 ms, faster than 95.27% of JavaScript online submissions for Find All Anagrams in a String.
// Memory Usage: 45.1 MB, less than 82.50% of JavaScript online submissions for Find All Anagrams in a String.

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = (s, p) => {
    let left = 0
    let right = 0
    let valid = p.length
    const r = []
    const store = {}
    for (let i = 0; i < p.length; i++) {
        store[p[i]] = store[p[i]] ? store[p[i]] + 1 : 1
    }

    while (right < s.length) {
        if (store[s[right]] !== undefined) {
            if (store[s[right]] > 0) {
                valid--
            }
            store[s[right]] -= 1
        }
        right++

        while (right - left >= p.length) {
            // console.log(left, right, valid, store, store[s[left]])
            if (valid === 0) {
                r.push(left)
            }
            if (store[s[left]] !== undefined) {
                if (store[s[left]] >= 0) {
                    valid++
                }
                store[s[left]] += 1
            }
            left++
        }
    }
    return r
}


const { resultArrEqual } = require('../test')


const tests = [
    {
        params: ['cbaebabacd', 'abc'],
        result: [0, 6],
    },
    {
        params: ['abab', 'ab'],
        result: [0, 1, 2],
    },
]

resultArrEqual(tests, findAnagrams)
