/*
On a N * N grid, we place some 1 * 1 * 1 cubes.

    Each value v = grid[i][j] represents a tower of v cubes placed on top of grid cell (i, j).

    Return the total surface area of the resulting shapes.


    Example 1:

Input: [[2]]
Output: 10
Example 2:

Input: [[1,2],[3,4]]
Output: 34
Example 3:

Input: [[1,0],[0,2]]
Output: 16
Example 4:

Input: [[1,1,1],[1,0,1],[1,1,1]]
Output: 32
Example 5:

Input: [[2,2,2],[2,1,2],[2,2,2]]
Output: 46


Note:

    1 <= N <= 50
0 <= grid[i][j] <= 50
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
//  Runtime: 70 ms, faster than 90.67% of JavaScript online submissions for Surface Area of 3D Shapes.
//  Memory Usage: 42.7 MB, less than 66.67% of JavaScript online submissions for Surface Area of 3D Shapes.
const surfaceArea = (grid) => {
    let area = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] !== 0) {
                area += grid[i][j] * 6 - (grid[i][j] - 1) * 2 - findDiff(grid, i, j)
            }
        }
    }
    return area
}

const findDiff = (grid, i, j) => {
    let diff = 0
    if (i !== grid.length - 1) {
        diff += Math.min(grid[i][j], grid[i + 1][j]) * 2
    }
    if (j !== grid[i].length - 1) {
        diff += Math.min(grid[i][j], grid[i][j + 1]) * 2
    }

    return diff
}

const { normalTest } = require('../test/index')

const test = [

    {
        params: [[[1, 2], [3, 4]]],
        result: 34,
    },
    {
        params: [[[1, 1, 1], [1, 0, 1], [1, 1, 1]]],
        result: 32,
    },
    {
        params: [[[2, 2, 2], [2, 1, 2], [2, 2, 2]]],
        result: 46,
    },
]

normalTest(test, surfaceArea)
