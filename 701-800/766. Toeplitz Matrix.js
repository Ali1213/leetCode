// A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same element.

// Now given an M x N matrix, return True if and only if the matrix is Toeplitz.
 

// Example 1:

// Input: matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
// Output: True
// Explanation:
// 1234
// 5123
// 9512

// In the above grid, the diagonals are "[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]", and in each diagonal all elements are the same, so the answer is True.
// Example 2:

// Input: matrix = [[1,2],[2,2]]
// Output: False
// Explanation:
// The diagonal "[1, 2]" has different elements.
// Note:

// matrix will be a 2D array of integers.
// matrix will have a number of rows and columns in range [1, 20].
// matrix[i][j] will be integers in range [0, 99].
 

// beat 92.91%
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    let m = matrix.length; let n = matrix[0].length;
    for(let i=0; i<m; i++ ){
        let x = i;
        let y = 0
        let v = matrix[x][y];
       while(x<m && y<n){
           if(matrix[x][y] !== v){
               return false;
           }
           ++x;
           ++y;
       }
    }
    for(let i=1; i<n; i++ ){
        let x = 0;
        let y = i;
        let v = matrix[x][y];
       while(x<m && y<n){
           if(matrix[x][y] !== v){
               return false;
           }
           ++x;
           ++y;
       }
    }
    return true
};




// beat 92.91%
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    let m = matrix.length-1; let n = matrix[0].length-1;
    for(let i = 0;i<m;i++){
        for(let j = 0;j<n;j++){
            if(matrix[i][j] !== matrix[i+1][j+1]){
                return false;
            }
        }
    }
    return true
};