/*
Given a string S that only contains "I" (increase) or "D" (decrease), let N = S.length.

    Return any permutation A of [0, 1, ..., N] such that for all i = 0, ..., N-1:

If S[i] == "I", then A[i] < A[i+1]
If S[i] == "D", then A[i] > A[i+1]


Example 1:

Input: "IDID"
Output: [0,4,1,3,2]
Example 2:

Input: "III"
Output: [0,1,2,3]
Example 3:

Input: "DDI"
Output: [3,2,0,1]


Note:

    1 <= S.length <= 10000
S only contains characters "I" or "D".
*/


/**
 * Runtime: 76 ms, faster than 88.93% of JavaScript online submissions for DI String Match.
 * Memory Usage: 37 MB, less than 100.00% of JavaScript online submissions for DI String Match.
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function (S) {
    let l = 0
    let r = S.length
    const key = new Array(S.length + 1)
    for (let i = 0; i < S.length; i++) {
        if (S[i] === 'I') {
            key[i] = l
            l += 1
        } else {
            key[i] = r
            r -= 1
        }
    }
    key[key.length - 1] = l
    return key
}


const {normalTest} = require('../test/index')

const test = [
    {
        params: ['IDID'],
        result: [0, 4, 1, 3, 2],
    },
    {
        params: ['III'],
        result: [0, 1, 2, 3],
    },
    {
        params: ['DDI'],
        result: [3, 2, 0, 1],
    },
]

normalTest(test, diStringMatch)
