// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.


// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false


// Constraints:

// 1 <= s1.length, s2.length <= 104
// s1 and s2 consist of lowercase English letters.

// Runtime: 129 ms, faster than 72.15% of JavaScript online submissions for Permutation in String.
// Memory Usage: 43.5 MB, less than 77.18% of JavaScript online submissions for Permutation in String.

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = (s1, s2) => {
    let left = 0
    let right = 0
    const store = {}
    let valid = s1.length

    for (let i = 0; i < s1.length; i++) {
        store[s1[i]] = store[s1[i]] ? store[s1[i]] + 1 : 1
    }

    while (right < s2.length) {
        if (store[s2[right]] !== undefined) {
            if (store[s2[right]] > 0) {
                valid--
            }
            store[s2[right]]--
        }
        right++
        while (right - left >= s1.length) {
            // console.log(left, right, valid, store, store[s2[left]])
            if (valid === 0) {
                return true
            }
            if (store[s2[left]] !== undefined) {
                store[s2[left]]++
                if (store[s2[left]] > 0) {
                    valid++
                }
            }
            left++
        }
    }
    return false
}


const { normalTest } = require('../test')


const tests = [
    {
        params: ['ab', 'eidbaooo'],
        result: true,
    },
    {
        params: ['ab', 'eidboaoo'],
        result: false,
    },
]

normalTest(tests, checkInclusion)
