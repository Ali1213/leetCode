// Given an integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

// For example,
// Given n = 3,

// You should return the following matrix:
// [
//  [ 1, 2, 3 ],
//  [ 8, 9, 4 ],
//  [ 7, 6, 5 ]
// ]

// beat 29.41%
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let result = new Array(n);
    for(let i = 0;i<n;i++){
        result[i] = new Array(n);
    }
    let rowBegin = 0, rowEnd = n-1, colBegin = 0, colEnd = n-1;
    let now = 0;
    let end = n*n;
    while(now<=end){
        for(let i = colBegin;i<=colEnd;i++){
            result[rowBegin][i] = ++now;
        }
        if(now === end)break;
        ++rowBegin;
        for(let i = rowBegin;i<=rowEnd;i++){
            result[i][colEnd] = ++now;
        }
        if(now === end)break;
        --colEnd;
        for(let i = colEnd;i>=colBegin;i--){
            result[rowEnd][i] = ++now;
        }
        if(now === end)break;
        --rowEnd;
        for(let i = rowEnd;i>=rowBegin;i--){
            result[i][colBegin] = ++now;
        }
        if(now === end)break;
        ++colBegin;
        
    }
    return result;
};