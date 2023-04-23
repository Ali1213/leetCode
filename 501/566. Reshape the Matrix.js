// In MATLAB, there is a very useful function called 'reshape', which can reshape a matrix into a new one with different size but keep its original data.

// You're given a matrix represented by a two-dimensional array, and two positive integers r and c representing the row number and column number of the wanted reshaped matrix, respectively.

// The reshaped matrix need to be filled with all the elements of the original matrix in the same row-traversing order as they were.

// If the 'reshape' operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

// Example 1:
// Input: 
// nums = 
// [[1,2],
//  [3,4]]
// r = 1, c = 4
// Output: 
// [[1,2,3,4]]
// Explanation:
// The row-traversing of nums is [1,2,3,4]. The new reshaped matrix is a 1 * 4 matrix, fill it row by row by using the previous list.
// Example 2:
// Input: 
// nums = 
// [[1,2],
//  [3,4]]
// r = 2, c = 4
// Output: 
// [[1,2],
//  [3,4]]
// Explanation:
// There is no way to reshape a 2 * 2 matrix to a 2 * 4 matrix. So output the original matrix.
// Note:
// The height and width of the given matrix is in range [1, 100].
// The given r and c are all positive.

// beat 100%
/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    if(nums.length === 0) return nums;
    let xLen = nums.length;
    let yLen = nums[0].length;
    if(xLen * yLen !== r*c) return nums;
    // let wrap = new Array(r).fill(new Array(c));
    let wrap = [];
    let x = 0; let y = 0;
    for(let i = 0 ; i< r;i++){
        wrap.push([]);
        for(let j = 0; j<c;j++){
            if(y === yLen){
                ++x;
                y = 0;
            }
                 ++y;
        }
    }
    return wrap;
};


// beat 100%
// 减小了复杂度
/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    if(nums.length === 0) return nums;
    let xLen = nums.length;
    let yLen = nums[0].length;
    if(xLen * yLen !== r*c) return nums;
    let wrap = [];
    let x=0,y=0,m=0,n=0;
    for(let i = 1,len = r*c ; i<= len;i++){
        if(y === yLen) {
            ++x;
            y = 0;
        }
        if(n === c){
            ++m;
            n = 0;
        }
        if(!wrap[m]) wrap[m] = [];
        
        wrap[m][n] = nums[x][y];
        ++y;
        ++n;
    }
    return wrap;
};