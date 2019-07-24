/*
A boomerang is a set of 3 points that are all distinct and not in a straight line.

Given a list of three points in the plane, return whether these points are a boomerang.

 

Example 1:

Input: [[1,1],[2,3],[3,2]]
Output: true
Example 2:

Input: [[1,1],[2,2],[3,3]]
Output: false
 

Note:

points.length == 3
points[i].length == 2
0 <= points[i][j] <= 100
*/


/**
 * Runtime: 76 ms, faster than 8.55% of JavaScript online submissions for Valid Boomerang.
 * Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions for Valid Boomerang.
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function (points) {

    let [[x1, y1], [x2, y2], [x3, y3]] = points

    return y2 === y1 && x2 === x1
        ? false
        : y2 === y1
            ? (y3 === y1 ? false : true)
            : x2 === x1
                ? (x3 === x1 ? false : true)
                : (y3 - y1) / (y2 - y1) !== (x3 - x1) / (x2 - x1)
};



var assert = require("assert")
var test = [
    [[[1, 1], [2, 3], [3, 2]], true],
    [[[1, 1], [2, 2], [3, 3]], false],
    [[[1, 1], [2, 3], [3, 3]], true],
    [[[0, 0], [1, 1], [1, 1]], false],
    // [[[0, 0], [3, 3], [2, 2]], true],
    [[[1, 1], [3, 3], [2, 2]], false],
    // [[[0, 0], [2, 2], [3, 3]], true],
    [[[0, 0], [1, 0], [2, 1]], false],
    [[[1, 1], [1, 1], [2, 1]], false],
    [[[0, 0], [0, 2], [2, 1]], true]
]


test.forEach(([A, r], index) => {
    console.log(index)
    try {
        assert.deepEqual(isBoomerang(A), r)

    } catch (e) {
        console.log(`===第${index + 1}===eccour error================`)
        console.log(`===${JSON.stringify(A)}===eccour error================`)
        throw e
    }
})