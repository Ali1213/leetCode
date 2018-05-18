// You are given an n x n 2D matrix representing an image.

// Rotate the image by 90 degrees (clockwise).

// Note:

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// Example 1:

// Given input matrix = 
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ],

// rotate the input matrix in-place such that it becomes:
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]
// Example 2:

// Given input matrix =
// [
//   [ 5, 1, 9,11],
//   [ 2, 4, 8,10],
//   [13, 3, 6, 7],
//   [15,14,12,16]
// ], 

// rotate the input matrix in-place such that it becomes:
// [
//   [15,13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7,10,11]
// ]

//beat 92.26%
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let n = matrix.length-1;
    let midX = n/2, midY = n/2
    let startX = 0, startY = 0;
    while(startX < midX){
        let boundary  = n - startY;
        let startX2 = startY;
        let startY2 = boundary
        let startX3 = boundary;
        let startY3 = boundary;
        let startX4 = startY3;
        let startY4 = startX;
        for(let i = startY; i< boundary;i++){
            let temp = matrix[startX][i];
            matrix[startX][i] = matrix[startX4][startY4];
            matrix[startX4][startY4] = matrix[startX3][startY3];
            matrix[startX3][startY3] = matrix[startX2][startY2];
            matrix[startX2][startY2] = temp;
            startX2++;
            startY3--;
            startX4--;    
        }
        startX++;
        startY++;
    }
};



/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let n = matrix.length-1;
    let midX = n/2;
    let startX = 0, startY = 0;
    while(startX < midX){
        let boundary  = n - startY;
        let startX2 = startY;
        let startY2 = boundary
        let startX3 = boundary;
        let startY3 = boundary;
        let startX4 = startY3;
        let startY4 = startX;
        for(let i = startY; i< boundary;i++){
            [matrix[startX][i],matrix[startX4--][startY4],matrix[startX3][startY3--],matrix[startX2++][startY2]] = [matrix[startX4][startY4],matrix[startX3][startY3],matrix[startX2][startY2],matrix[startX][i]];   
        }
        startX++;
        startY++;
    }
};