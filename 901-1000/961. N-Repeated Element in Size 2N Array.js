/*
In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.

    Return the element repeated N times.



    Example 1:

Input: [1,2,3,3]
Output: 3
Example 2:

Input: [2,1,2,5,3,2]
Output: 2
Example 3:

Input: [5,1,5,2,5,3,5,4]
Output: 5


Note:

    4 <= A.length <= 10000
0 <= A[i] < 10000
A.length is even
*/
/**
 * Runtime: 64 ms, faster than 75.59% of JavaScript online submissions for N-Repeated Element in Size 2N Array.
 * Memory Usage: 36.2 MB, less than 93.75% of JavaScript online submissions for N-Repeated Element in Size 2N Array.
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function (A) {
    const s = new Set()
    for (let i = 0; i < A.length; i++) {
        if (s.has(A[i])) return A[i]
        s.add(A[i])
    }
}


const {normalTest} = require('../test/index')

const test = [
    {
        params: [[1, 2, 3, 3]],
        result: 3,
    },
    {
        params: [[2, 1, 2, 5, 3, 2]],
        result: 2,
    },
    {
        params: [[5, 1, 5, 2, 5, 3, 5, 4]],
        result: 5,
    },
]

normalTest(test, repeatedNTimes)

