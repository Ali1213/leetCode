/* Given two integer arrays A and B, return the maximum length of an subarray that appears in both arrays.

Example 1:
Input:
A: [1,2,3,2,1]
B: [3,2,1,4,7]
Output: 3
Explanation: 
The repeated subarray with maximum length is [3, 2, 1].
Note:
1 <= len(A), len(B) <= 1000
0 <= A[i], B[i] < 100 */

// beat 86.36%
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
    let store = new Array(B.length+1).fill(0)
    let max = 0    
    for(let i = 0; i< A.length; i++){
        let tem = new Array(B.length+1).fill(0)
        for(let j = 0; j<B.length; j++){
            if(A[i] === B[j]){
                tem[j+1] = 1 + store[j]
                max = Math.max(max,tem[j+1])
            }
        }
        store = tem
    }
    return max
};