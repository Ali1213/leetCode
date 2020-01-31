/*
X is a good number if after rotating each digit individually by 180 degrees, we get a valid number that is different from X.  Each digit must be rotated - we cannot choose to leave it alone.

    A number is valid if each digit remains a digit after rotation. 0, 1, and 8 rotate to themselves; 2 and 5 rotate to each other; 6 and 9 rotate to each other, and the rest of the numbers do not rotate to any other number and become invalid.

    Now given a positive number N, how many numbers X from 1 to N are good?

    Example:
    Input: 10
Output: 4
Explanation:
    There are four good numbers in the range [1, 10] : 2, 5, 6, 9.
Note that 1 and 10 are not good numbers, since they remain unchanged after rotating.
    Note:

N  will be in range [1, 10000].
*/

/**
 * Runtime: 60 ms, faster than 86.86% of JavaScript online submissions for Rotated Digits.
 * Memory Usage: 35 MB, less than 100.00% of JavaScript online submissions for Rotated Digits.
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function (N) {
    let count = 0
    let i = 1
    const rotated = new Set([2, 5, 6, 9])
    // const need = new Set([0, 1, 8])
    const exclude = new Set([3, 4, 7])
    while (i < 10 && i <= N) {
        if (rotated.has(i)) {
            count += 1
        }
        i++
    }
    while (i <= N) {
        let x = i
        let has = false
        while (x > 0) {
            const s = x % 10
            x = x / 10 >> 0
            if (exclude.has(s)) {
                has = false
                break
            } else if (rotated.has(s)) {
                has = true
            }
        }
        if (has) {
            count += 1
        }
        i++
    }
    return count
}


const {normalTest} = require('../test/index')

const test = [
    {
        params: [10],
        result: 4,
    },
]

normalTest(test, rotatedDigits)
