// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

// For example,
// Given the following matrix:

// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// You should return [1,2,3,6,9,8,7,4,5].


// beat 94.66%
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(matrix == null || matrix.length === 0) return matrix;
    let rowBegin = 0, rowEnd = matrix.length - 1, colBegin = 0, colEnd = matrix[0].length - 1;
    let result = [];
    while(true){
        
        //from left to right;
        for(let i = colBegin; i<=colEnd; i++){
            result.push(matrix[rowBegin][i]);
        }
        if(++rowBegin > rowEnd) break;
        //from right to rightBottom
        for(let i = rowBegin; i<=rowEnd;i++){
            // console.log(1)
            result.push(matrix[i][colEnd]);
        }
        if(--colEnd < colBegin) break;
        //from rightBottom to leftBottom
        for(let i= colEnd; i>= colBegin; i--){
            // console.log(2)
            result.push(matrix[rowEnd][i]);
        }
        if(--rowEnd < rowBegin) break;
        for(let i = rowEnd; i>= rowBegin;i--){
            result.push(matrix[i][colBegin]);
        }
        if(++colBegin > colEnd) break;
    }
    return result;
};