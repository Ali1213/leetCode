/*
You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.

    Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.


Example:

    Input:
        [[0,1,0,0],
            [1,1,1,0],
            [0,1,0,0],
            [1,1,0,0]]

Output: 16

Explanation: The perimeter is the 16 yellow stripes in the image below:
*/

/**
 * Runtime: 192 ms, faster than 50.54% of JavaScript online submissions for Island Perimeter.
 * Memory Usage: 44.6 MB, less than 50.00% of JavaScript online submissions for Island Perimeter.
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = function (grid) {
    if(grid.length === 0) return 0;
    let count = 0;
    const x = grid.length;
    const y = grid[0].length;
    const getLen = (i, j) => {
        if (i === 0 || grid[i - 1][j] === 0) {
            count += 1;
        }

        if (j === 0 || grid[i][j - 1] === 0) {
            count += 1;
        }

        if (i === x - 1 || grid[i + 1][j] === 0) {
            count += 1;
        }

        if (j === y - 1 || grid[i][j + 1] === 0) {
            count += 1;
        }
    };

    for (let i = 0; i < x; i += 1) {
        for (let j = 0; j < y; j += 1) {
            if(grid[i][j] === 1) getLen(i, j);
        }
    }
    return count;
};


const assert = require('assert');

const test = [
    [[[0, 1, 0, 0],
        [1, 1, 1, 0],
        [0, 1, 0, 0],
        [1, 1, 0, 0]], 16],
];


test.forEach(([A, r], index) => {
    try {
        assert.deepEqual(islandPerimeter(A), r);
    } catch (e) {
        console.log(`${index} occur error`);
        console.log(e);
        throw e;
    }
});
