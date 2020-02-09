/*
A rectangle is represented as a list [x1, y1, x2, y2], where (x1, y1) are the coordinates of its bottom-left corner, and (x2, y2) are the coordinates of its top-right corner.

    Two rectangles overlap if the area of their intersection is positive.  To be clear, two rectangles that only touch at the corner or edges do not overlap.

    Given two (axis-aligned) rectangles, return whether they overlap.

    Example 1:

Input: rec1 = [0,0,2,2], rec2 = [1,1,3,3]
Output: true
Example 2:

Input: rec1 = [0,0,1,1], rec2 = [1,0,2,1]
Output: false
Notes:

    Both rectangles rec1 and rec2 are lists of 4 integers.
    All coordinates in rectangles will be between -10^9 and 10^9.
*/


/**
 * Runtime: 64 ms, faster than 18.43% of JavaScript online submissions for Rectangle Overlap.
 * Memory Usage: 33.8 MB, less than 66.67% of JavaScript online submissions for Rectangle Overlap.
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function (rec1, rec2) {
    const ry1 = Math.abs((rec1[3] - rec1[1]) / 2)
    const rx1 = Math.abs((rec1[2] - rec1[0]) / 2)
    const ry2 = Math.abs((rec2[3] - rec2[1]) / 2)
    const rx2 = Math.abs((rec2[2] - rec2[0]) / 2)
    const mid1 = [(rec1[2] + rec1[0]) / 2, (rec1[3] + rec1[1]) / 2]
    const mid2 = [(rec2[2] + rec2[0]) / 2, (rec2[3] + rec2[1]) / 2]

    return Math.abs(mid2[0] - mid1[0]) < rx1 + rx2 && Math.abs(mid2[1] - mid1[1]) < ry1 + ry2
}


const {normalTest} = require('../test/index')

const test = [
    {
        params: [[0, 0, 2, 2], [1, 1, 3, 3]],
        result: true,
    },
    {
        params: [[0, 0, 1, 1], [1, 0, 2, 1]],
        result: false,
    },
]

normalTest(test, isRectangleOverlap)


