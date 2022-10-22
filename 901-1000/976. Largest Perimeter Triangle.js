/*
Given an array A of positive lengths, return the largest perimeter of a triangle with non-zero area, formed from 3 of these lengths.

    If it is impossible to form any triangle of non-zero area, return 0.



Example 1:

Input: [2,1,2]
Output: 5
Example 2:

Input: [1,2,1]
Output: 0
Example 3:

Input: [3,2,3,4]
Output: 10
Example 4:

Input: [3,6,2,3]
Output: 8


Note:

    3 <= A.length <= 10000
1 <= A[i] <= 10^6
*/

/**
 * Runtime: 100 ms, faster than 46.15% of JavaScript online submissions for Largest Perimeter Triangle.
 * Memory Usage: 37.9 MB, less than 100.00% of JavaScript online submissions for Largest Perimeter Triangle.
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function (A) {
    const arr = A.sort((a, b) => b - a)
    const isTri = (a, b, c) => a + b > c && a + c > b && b + c > a
    for (let i = 0; i < arr.length - 2; i++) {
        if (isTri(arr[i], arr[i + 1], arr[i + 2])) {
            return arr[i] + arr[i + 1] + arr[i + 2]
        }
    }
    return 0
}


const {normalTest} = require('../test/index')

const test = [
    {
        params: [[2, 1, 2]],
        result: 5,
    },
    {
        params: [[1, 2, 1]],
        result: 0,
    },
    {
        params: [[3, 2, 3, 4]],
        result: 10,
    },
    {
        params: [[3, 6, 2, 3]],
        result: 8,
    },
]

normalTest(test, largestPerimeter)
