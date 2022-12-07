// Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.

// A region is captured by flipping all 'O's into 'X's in that surrounded region.


// Example 1:


// Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
// Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
// Explanation: Notice that an 'O' should not be flipped if:
// - It is on the border, or
// - It is adjacent to an 'O' that should not be flipped.
// The bottom 'O' is on the border, so it is not flipped.
// The other three 'O' form a surrounded region, so they are flipped.
// Example 2:

// Input: board = [["X"]]
// Output: [["X"]]


// Constraints:

// m == board.length
// n == board[i].length
// 1 <= m, n <= 200
// board[i][j] is 'X' or 'O'.
// Runtime
// 98 ms
// Beats
// 88.60%
// Memory
// 46.4 MB
// Beats
// 80.39%
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solve = (board) => {
    for (let i = 0; i < board.length; i++) {
        find(board, i, 0)
        find(board, i, board[i].length - 1)
    }
    for (let i = 0; i < board[0].length; i++) {
        find(board, 0, i)
        find(board, board.length - 1, i)
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] == 'F') {
                board[i][j] = 'O'
            } else if (board[i][j] == 'O') {
                board[i][j] = 'X'
            }
        }
    }
    return board
}

const find = (board, i, j) => {
    if (board[i][j] === 'X' || board[i][j] === 'F') {
        return
    }
    board[i][j] = 'F'
    if (i !== 0) {
        find(board, i - 1, j)
    }
    if (i !== board.length - 1) {
        find(board, i + 1, j)
    }

    if (j !== 0) {
        find(board, i, j - 1)
    }

    if (j !== board[i].length - 1) {
        find(board, i, j + 1)
    }
}


const { normalTest } = require('../test')


const tests = [
    {
        params: [[['X', 'X', 'X', 'X'], ['X', 'O', 'O', 'X'], ['X', 'X', 'O', 'X'], ['X', 'O', 'X', 'X']]],
        result: [['X', 'X', 'X', 'X'], ['X', 'X', 'X', 'X'], ['X', 'X', 'X', 'X'], ['X', 'O', 'X', 'X']],
    },
    {
        params: [[['X']]],
        result: [['X']],
    },
]

normalTest(tests, solve)
