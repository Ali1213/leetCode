/* 
On an 8 x 8 chessboard, there is one white rook.  There also may be empty squares, white bishops, and black pawns.  These are given as characters 'R', '.', 'B', and 'p' respectively. Uppercase characters represent white pieces, and lowercase characters represent black pieces.

The rook moves as in the rules of Chess: it chooses one of four cardinal directions (north, east, west, and south), then moves in that direction until it chooses to stop, reaches the edge of the board, or captures an opposite colored pawn by moving to the same square it occupies.  Also, rooks cannot move into the same square as other friendly bishops.

Return the number of pawns the rook can capture in one move.

 

Example 1:



Input: [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","R",".",".",".","p"],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]
Output: 3
Explanation: 
In this example the rook is able to capture all the pawns.
Example 2:



Input: [[".",".",".",".",".",".",".","."],[".","p","p","p","p","p",".","."],[".","p","p","B","p","p",".","."],[".","p","B","R","B","p",".","."],[".","p","p","B","p","p",".","."],[".","p","p","p","p","p",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]
Output: 0
Explanation: 
Bishops are blocking the rook to capture any pawn.
Example 3:



Input: [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","p",".",".",".","."],["p","p",".","R",".","p","B","."],[".",".",".",".",".",".",".","."],[".",".",".","B",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."]]
Output: 3
Explanation: 
The rook can capture the pawns at positions b5, d6 and f5.
 

Note:

board.length == board[i].length == 8
board[i][j] is either 'R', '.', 'B', or 'p'
There is exactly one cell with board[i][j] == 'R' 
*/



/**
 * Runtime: 56 ms, faster than 97.72% of JavaScript online submissions for Available Captures for Rook.
 * Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions for Available Captures for Rook.
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
    let x;
    let y;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === 'R') {
                x = i;
                y = j;
                break;
            }
        }
        if (typeof x === 'number') break;
    }

    let count = 0;
    let i = 0;
    const found = (x, y, xPos, yPos) => {
        let px = x;
        let py = y;
        while (true) {
            px = px + xPos
            py = py + yPos
            if (px < 0 || px >= board.length || py < 0 || py >= board[0].length) {
                return;
            }
            if (board[px][py] === 'B') return;
            if (board[px][py] === 'p') {
                count += 1;
                return;
            }
        }
    }
    found(x, y, 0, -1);
    found(x, y, 0, 1);
    found(x, y, -1, 0);
    found(x, y, 1, 0);
    return count;
};