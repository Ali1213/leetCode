/*
You have a list of points in the plane. Return the area of the largest triangle that can be formed by any 3 of the points.

    Example:
Input: points = [[0,0],[0,1],[1,0],[0,2],[2,0]]
Output: 2
Explanation:
    The five points are show in the figure below. The red triangle is the largest.


    Notes:

3 <= points.length <= 50.
No points will be duplicated.
-50 <= points[i][j] <= 50.
Answers within 10^-6 of the true value will be accepted as correct.
*/


/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points) {
    let max = 0
    for (let i = 0; i < points.length - 2; i++) {
        for (let j = i + 1; j < points.length - 1; j++) {
            for (let k = j + 1; k < points.length; k++) {
                max = Math.max(max, Math.abs(points[i][0] * points[j][1] - points[i][0] * points[k][1] + points[j][0] * points[k][1] - points[j][0] * points[i][1] + points[k][0] * points[i][1] - points[k][0] * points[j][1]) / 2)
            }
        }
    }
    return max
}


const {normalTest} = require('../test/index')

const test = [
    {
        params: [[[0, 0], [0, 1], [1, 0], [0, 2], [2, 0]]],
        result: 2,
    },
    {
        params: [[[1, 0], [0, 0], [0, 1]]],
        result: 0.5,
    },
]

normalTest(test, largestTriangleArea)
