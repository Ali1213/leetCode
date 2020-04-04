/*
In a given grid, each cell can have one of three values:

    the value 0 representing an empty cell;
the value 1 representing a fresh orange;
the value 2 representing a rotten orange.
    Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

    Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead.


    Example 1:


Input: [[2,1,1],[1,1,0],[0,1,1]]
Output: 4
Example 2:

Input: [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation:  The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
    Example 3:

Input: [[0,2]]
Output: 0
Explanation:  Since there are already no fresh oranges at minute 0, the answer is just 0.


Note:

    1 <= grid.length <= 10
1 <= grid[0].length <= 10
grid[i][j] is only 0, 1, or 2. */


/**
 * Runtime: 72 ms, faster than 54.61% of JavaScript online submissions for Rotting Oranges.
 * Memory Usage: 36.7 MB, less than 50.00% of JavaScript online submissions for Rotting Oranges
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = function (grid) {
    let list = []
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 2) {
                list.push([i, j])
            }
        }
    }
    let day = 0
    while (true) {
        let newList = []
        while (list.length > 0) {
            const point = list.shift()

            if (point[0] > 0) {
                if (grid[point[0] - 1][point[1]] === 1) {
                    newList.push([point[0] - 1, point[1]])
                    grid[point[0] - 1][point[1]] = 2
                }
            }

            if (point[0] < grid.length - 1) {
                if (grid[point[0] + 1][point[1]] === 1) {
                    newList.push([point[0] + 1, point[1]])
                    grid[point[0] + 1][point[1]] = 2
                }
            }

            if (point[1] > 0) {
                if (grid[point[0]][point[1] - 1] === 1) {
                    newList.push([point[0], point[1] - 1])
                    grid[point[0]][point[1] - 1] = 2
                }
            }

            if (point[1] < grid[0].length - 1) {
                if (grid[point[0]][point[1] + 1] === 1) {
                    newList.push([point[0], point[1] + 1])
                    grid[point[0]][point[1] + 1] = 2
                }
            }
        }
        if (newList.length === 0) break
        day += 1
        list = newList
        newList = []
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                return -1
            }
        }
    }
    return day
}


const { normalTest } = require('../test/index')

const test = [
    {
        params: [[[2, 1, 1], [1, 1, 0], [0, 1, 1]]],
        result: 4,
    },
    {
        params: [[[2, 1, 1], [0, 1, 1], [1, 0, 1]]],
        result: -1,
    },
    {
        params: [[[0, 2]]],
        result: 0,
    },
]

normalTest(test, orangesRotting)
