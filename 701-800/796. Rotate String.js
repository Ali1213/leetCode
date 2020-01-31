/*
We are given two strings, A and B.

    A shift on A consists of taking string A and moving the leftmost character to the rightmost position. For example, if A = 'abcde', then it will be 'bcdea' after one shift on A. Return True if and only if A can become B after some number of shifts on A.

    Example 1:
Input: A = 'abcde', B = 'cdeab'
Output: true

Example 2:
Input: A = 'abcde', B = 'abced'
Output: false
Note:

    A and B will have length at most 100.
*/

/**
 * Runtime: 56 ms, faster than 59.35% of JavaScript online submissions for Rotate String.
 * Memory Usage: 33.9 MB, less than 50.00% of JavaScript online submissions for Rotate String.
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function (A, B) {
    if (A.length !== B.length) return false

    let i = 1
    while (i < A.length) {
        if (A.substring(i) + A.substring(0, i) === B) {
            return true
        }
        i++
    }
    return A === B
}


const {normalTest} = require('../test/index')

const test = [
    {
        params: ['abcde', 'cdeab'],
        result: true,
    },
    {
        params: ['abcde', 'abced'],
        result: false,
    },
    {
        params: ['gcmbf', 'fgcmb'],
        result: true,
    },
    {
        params: ['', ''],
        result: true,
    },
]

normalTest(test, rotateString)
