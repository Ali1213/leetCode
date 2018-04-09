//
// Given a 2D board and a word, find if the word exists in the grid.
//
//   The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.
//
//   For example,
//   Given board =
//
//   [
//     ['A','B','C','E'],
//     ['S','F','C','S'],
//     ['A','D','E','E']
//   ]
// word = "ABCCED", -> returns true,
//   word = "SEE", -> returns true,
//   word = "ABCB", -> returns false.


// beat 98.98%
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

var exist = function(board, word) {
  let n = board.length, m = board[0].length;
  var search = (x,y,board,word,pos) => {
    if(pos === word.length) return true;
    if(x<0 || y<0 || x=== n || y=== m || word[pos] !== board[x][y] ) return false;
    let temp = board[x][y];
    board[x][y]=null;
    let bol = search(x-1,y,board,word,pos+1) ||
      search(x+1,y,board,word,pos+1) ||
      search(x,y-1,board,word,pos+1) ||
      search(x,y+1,board,word,pos+1);
    board[x][y] = temp
    return bol;
  }
  for(let i = 0; i<n; i++){
    for(let j = 0; j<m; j++){
      if(search(i,j,board,word,0)) return true;
    }
  }


  return false;
};