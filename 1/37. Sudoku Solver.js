// Write a program to solve a Sudoku puzzle by filling the empty cells.

// A sudoku solution must satisfy all of the following rules:

// Each of the digits 1-9 must occur exactly once in each row.
// Each of the digits 1-9 must occur exactly once in each column.
// Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
// The '.' character indicates empty cells.


// Example 1:


// Input: board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
// Output: [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]
// Explanation: The input board is shown above and the only valid solution is shown below:


// Constraints:

// board.length == 9
// board[i].length == 9
// board[i][j] is a digit or '.'.
// It is guaranteed that the input board has only one solution.

// Runtime: 132 ms, faster than 76.84% of JavaScript online submissions for Sudoku Solver.
// Memory Usage: 43.1 MB, less than 73.90% of JavaScript online submissions for Sudoku Solver.
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solveSudoku = (board) => {
    const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    solve(board, nums, 0, 0)
    return board
}


const solve = (board, nums, x = 0, y = 0) => {
    const m = 9
    const n = 9
    if (y === n) {
        return solve(board, nums, x + 1, 0)
    }
    if (x === m) {
        return true
    }
    // if(x === board)
    if (board[x][y] !== '.') {
        return solve(board, nums, x, y + 1)
    }
    for (let i = 0; i < nums.length; i++) {
        if (!checkIsRight(board, x, y, nums[i])) {
            // eslint-disable-next-line no-continue
            continue
        }
        board[x][y] = nums[i]
        const isOK = solve(board, nums, x, y + 1)
        if (isOK) {
            return true
        }
        board[x][y] = '.'
    }
    return false
}


const checkIsRight = (board, i, j, ch) => {
    for (let m = 0; m < 9; m++) {
        if (board[i][m] === ch) {
            return false
        }
        if (board[m][j] === ch) {
            return false
        }
        if (board[Math.floor(i / 3) * 3 + Math.floor(m / 3)][Math.floor(j / 3) * 3 + (m % 3)] === ch) {
            return false
        }
    }
    return true
}
