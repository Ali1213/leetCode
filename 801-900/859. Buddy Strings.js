/*

Given two strings A and B of lowercase letters, return true if and only if we can swap two letters in A so that the result equals B.



    Example 1:

Input: A = "ab", B = "ba"
Output: true
Example 2:

Input: A = "ab", B = "ab"
Output: false
Example 3:

Input: A = "aa", B = "aa"
Output: true
Example 4:

Input: A = "aaaaaaabc", B = "aaaaaaacb"
Output: true
Example 5:

Input: A = "", B = "aa"
Output: false


Note:

    0 <= A.length <= 20000
0 <= B.length <= 20000
A and B consist only of lowercase letters.
*/

/**
 * Runtime: 56 ms, faster than 93.58% of JavaScript online submissions for Buddy Strings.
 * Memory Usage: 35.5 MB, less than 75.00% of JavaScript online submissions for Buddy Strings.
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function (A, B) {
    if (A.length !== B.length) return false
    if (A === B) {
        const set = new Set()
        for (let i = 0; i < A.length; i++) {
            if (set.has(A[i])) return true
            set.add(A[i])
        }
    }
    let count = 0
    let s1 = ''
    let s2 = ''
    for (let i = 0; i < A.length; i++) {
        if (A[i] !== B[i]) {
            s1 += A[i]
            s2 = B[i] + s2
            count += 1
            if (count > 2) return false
        }
    }
    return count === 2 && s2 === s1
}


const {normalTest} = require('../test/index')

const test = [
    {
        params: ['ab', 'ba'],
        result: true,
    },
    {
        params: ['ab', 'ab'],
        result: false,
    },
    {
        params: ['aa', 'aa'],
        result: true,
    },
    {
        params: ['aaaaaaabc', 'aaaaaaacb'],
        result: true,
    },
    {
        params: ['', 'aa'],
        result: false,
    },
    {
        params: ['abcaa', 'abcbb'],
        result: false,
    },
]

normalTest(test, buddyStrings)

