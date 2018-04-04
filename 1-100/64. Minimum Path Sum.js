//
// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.
//
//     Note: You can only move either down or right at any point in time.
//
//     Example 1:
// [[1,3,1],
//     [1,5,1],
//     [4,2,1]]
// Given the above grid map, return 7. Because the path 1→3→1→1→1 minimizes the sum.
//beat 88.64%
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  if(!(Array.isArray(grid) && Array.isArray(grid[0]))) return grid;
  let x = grid[0].length, y = grid.length;
  let store = new Array(y);

  store[0] = new Array(x);
  store[0][0] = grid[0][0] || 0;
  for (let i = 1; i < y; i++) {
    store[i] = new Array(x);
    store[i][0] = grid[i][0] + store[i - 1][0];
  }
  for (let i = 1; i < x; i++) {
    store[0][i] = grid[0][i] + store[0][i - 1];
  }

  for (let i = 1; i < y; i++) {
    for (let j = 1; j < x; j++) {
      store[i][j] = grid[i][j] + Math.min(store[i - 1][j], store[i][j - 1]);
    }
  }

  return store[y - 1][x - 1];
};