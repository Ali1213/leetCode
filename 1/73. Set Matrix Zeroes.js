// Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in place.
//
//   click to show follow up.
//
//   Follow up:
//   Did you use extra space?
//   A straight forward solution using O(mn) space is probably a bad idea.
//   A simple improvement uses O(m + n) space, but still not the best solution.
//   Could you devise a constant space solution?


// beat 92.86%
// 使用了额外空间
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let x = matrix[0].length, y = matrix.length;
  var xNeed = new Set(), yNeed = new Set();
  for (let i = 0; i < y; i++) {
    for (let j = 0; j < x; j++) {
      if (matrix[i][j] === 0) {
        xNeed.add(j);
        yNeed.add(i)
      }
    }
  }
  for (let n of xNeed) {
    for (let i = 0; i < y; i++) {
      matrix[i][n] = 0;
    }
  }
  for (let n of yNeed) {
    for (let i = 0; i < x; i++) {
      matrix[n][i] = 0;
    }
  }

};



// no extra space

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var setZeroes = function(matrix) {
  let x = matrix[0].length,y=matrix.length;
  var xNeed = new Set(), yNeed = new Set();
  for(let i =0;i<y;i++){
    for(let j=0;j<x;j++){
      if(matrix[i][j] === 0){
        for(let k=0;k<y;k++){
          if(matrix[k][j] !== 0)
            matrix[k][j] = null;
        }
        for(let k=0;k<x;k++){
          if(matrix[i][k] !== 0)
            matrix[i][k] = null;
        }
      }
    }
  }
  for(let i =0;i<y;i++){
    for(let j=0;j<x;j++){
      if(matrix[i][j] === null){
        matrix[i][j] = 0
      }
    }
  }

};