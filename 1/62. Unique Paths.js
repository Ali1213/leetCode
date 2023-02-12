// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// How many possible unique paths are there?


// Above is a 3 x 7 grid. How many possible unique paths are there?

// Note: m and n will be at most 100.

// beat 92.93%
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let store = new Array(m);
    for(let i = 0;i<m;i++){
        store[i] = new Array(n);
        store[i][0] = 1;
    }
    for(let i=0;i<n;i++){
        store[0][i] = 1;
    }

    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
            store[i][j] = store[i-1][j] + store[i][j-1];
        }
    }
    return store[m-1][n-1];
};