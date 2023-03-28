//
// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
//
//   Integers in each row are sorted from left to right.
//   The first integer of each row is greater than the last integer of the previous row.
//   For example,
//
//   Consider the following matrix:
//
//   [
//     [1,   3,  5,  7],
//     [10, 11, 16, 20],
//     [23, 30, 34, 50]
//   ]
// Given target = 3, return true.



// beat 98.55%
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var getValue = (matrix,n,pos) => {
  return matrix[Math.floor(pos/n)][pos%n];
}
var searchMatrix = function(matrix, target) {
  if(!matrix || matrix.length === 0 || matrix[0].length === 0)return false;
  let y = matrix.length, x = matrix[0].length;
  let total = x*y;
  let start = 0, end = x*y-1;
  while(start<=end){
    let middle = Math.floor((start+end)/2);
    let value = getValue(matrix,x,middle);
    if(value === target){
      return true;
    }else if(value<target){
      start = middle + 1;
    }else {
      end = middle -1;
    }
  }
  return false;
};