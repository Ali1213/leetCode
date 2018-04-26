
// Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

// For example, given the following triangle

// [
//      [2],
//     [3,4],
//    [6,5,7],
//   [4,1,8,3]
// ]
// The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).

// Note:

// Bonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle.

// beat 88.52%
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    if(triangle === null || triangle[0]===null) return 0
    let len = triangle.length;
    let store = new Array(len-1);
    store[0] = triangle[0][0];
    for(let i = 1; i<len;i++){
        let yLen = triangle[i].length - 1;
        let temp = store[0];
        store[0] = triangle[i][0] + temp;
        for(let j=1;j<yLen;j++){
            [temp,store[j]] = [store[j],Math.min(triangle[i][j]+store[j],triangle[i][j]+temp)];
            // console.log(temp)
        }
        store[yLen] = temp + triangle[i][yLen];
        // console.log(store)
    }
    let min = store[0];
    for(let i = 1; i<len;i++){
        if(store[i]<min) min = store[i];
    }
    return min;
};