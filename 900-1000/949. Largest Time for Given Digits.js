/*
Given an array of 4 digits, return the largest 24 hour time that can be made.

    The smallest 24 hour time is 00:00, and the largest is 23:59.  Starting from 00:00, a time is larger if more time has elapsed since midnight.

    Return the answer as a string of length 5.  If no valid time can be made, return an empty string.



    Example 1:

Input: [1,2,3,4]
Output: "23:41"
Example 2:

Input: [5,5,5,5]
Output: ""


Note:

    A.length == 4
0 <= A[i] <= 9
*/


/**
 * Runtime: 56 ms, faster than 81.69% of JavaScript online submissions for Largest Time for Given Digits.
 * Memory Usage: 35 MB, less than 100.00% of JavaScript online submissions for Largest Time for Given Digits.
 * @param {number[]} A
 * @return {string}
 */
var largestTimeFromDigits = function (A) {

    const isTime = (a, b, c) => c < 6 && (a < 2 || (a === 2 && b < 4))
    let time = ''
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A.length; j++) {
            if (j === i) continue
            for (let k = 0; k < A.length; k++) {
                if (k === j || k === i) continue
                if (isTime(A[i], A[j], A[k])) {
                    const now = '' + A[i] + A[j] + ':' + A[k] + A[6 - i - j - k]
                    if (now > time) {
                        time = now
                    }
                }
            }
        }
    }
    return time
}


const {normalTest} = require('../test/index')

const test = [
    {
        params: [[1, 2, 3, 4]],
        result: '23:41',
    },
    {
        params: [[5, 5, 5, 5]],
        result: '',
    },
    {
        params: [[3, 2, 7, 0]],
        result: '23:07',
    },
]

normalTest(test, largestTimeFromDigits)
