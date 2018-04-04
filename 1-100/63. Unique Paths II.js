
// Follow up for "Unique Paths":

// Now consider if some obstacles are added to the grids. How many unique paths would there be?

// An obstacle and empty space is marked as 1 and 0 respectively in the grid.

// For example,
// There is one obstacle in the middle of a 3x3 grid as illustrated below.

// [
//   [0,0,0],
//   [0,1,0],
//   [0,0,0]
// ]
// The total number of unique paths is 2.

// Note: m and n will be at most 100.


// beat 82.61%
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  let y = obstacleGrid.length, x = obstacleGrid[0].length;
  let store = new Array(y);
  // 填充一个空二维数组
    let off = false;
  for (let i = 0; i < y; i++) {
    store[i] = new Array(x);
    if(obstacleGrid[i][0] === 1 || off){
        store[i][0] = 0;
        off = true;
    }else{
        store[i][0] = 1;
    } 
  }
  off = false;
  for (let i = 0; i < x; i++) {
    store[0][i] = obstacleGrid[0][i] === 1 ? 0 : 1;
    if(obstacleGrid[0][i] === 1 || off){
        store[0][i] = 0;
        off = true;
    }else{
        store[0][i] = 1;
    } 
  }

  for (let i = 1; i < y; i++) {
    for (let j = 1; j < x; j++) {
      if (obstacleGrid[i][j] === 0) {
        store[i][j] = store[i - 1][j] + store[i][j - 1];
      } else {
        store[i][j] = 0;
      }
    }
  }
  return store[y - 1][x - 1];
};