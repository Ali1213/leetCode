/*
An image is represented by a 2-D array of integers, each integer representing the pixel value of the image (from 0 to 65535).

Given a coordinate (sr, sc) representing the starting pixel (row and column) of the flood fill, and a pixel value newColor, "flood fill" the image.

    To perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color as the starting pixel), and so on. Replace the color of all of the aforementioned pixels with the newColor.

    At the end, return the modified image.

    Example 1:
Input:
    image = [[1,1,1],[1,1,0],[1,0,1]]
sr = 1, sc = 1, newColor = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation:
    From the center of the image (with position (sr, sc) = (1, 1)), all pixels connected
by a path of the same color as the starting pixel are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected
to the starting pixel.
    Note:

The length of image and image[0] will be in the range [1, 50].
    The given starting pixel will satisfy 0 <= sr < image.length and 0 <= sc < image[0].length.
    The value of each color in image[i][j] and newColor will be an integer in [0, 65535].
*/

/**
 * Runtime: 76 ms, faster than 66.46% of JavaScript online submissions for Flood Fill.
 * Memory Usage: 36.4 MB, less than 50.00% of JavaScript online submissions for Flood Fill.
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
    const R = image.length
    const C = image[0].length
    if (image[sr][sc] === newColor) return image
    const color = image[sr][sc]

    const dfs = (image, r, c) => {
        if (image[r][c] !== color) return
        image[r][c] = newColor
        if (r > 0) {
            dfs(image, r - 1, c)
        }
        if (r < R - 1) {
            dfs(image, r + 1, c)
        }
        if (c > 0) {
            dfs(image, r, c - 1)
        }
        if (c < C - 1) {
            dfs(image, r, c + 1)
        }
    }
    dfs(image, sr, sc)
    return image
}

const {normalTest} = require('../test/index')

const test = [
    {
        params: [[[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2],
        result: [[2, 2, 2], [2, 2, 0], [2, 0, 1]],
    },
    {
        params: [[[0, 0, 0], [1, 0, 0]], 1, 0, 2],
        result: [[0, 0, 0], [2, 0, 0]],
    },
]

normalTest(test, floodFill)

