/* 

Given an array of integers A, find the sum of min(B), where B ranges over every (contiguous) subarray of A.

Since the answer may be large, return the answer modulo 10^9 + 7.

 

Example 1:

Input: [3,1,2,4]
Output: 17
Explanation: Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4]. 
Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.  Sum is 17.
 

Note:

1 <= A.length <= 30000
1 <= A[i] <= 30000

*/

/**
 * 朴素流算法
 */
// beat 20.83%
/**
 * @param {number[]} A
 * @return {number}
 */
var sumSubarrayMins = function(A) {
    let mins = []
    let total = 0;
    for(let i = 0; i< A.length; i++){
        for(let j = 0; j<mins.length;j++){
            if(A[i]<mins[j]) mins[j] = A[i]
            total += mins[j];
        }
        mins.push(A[i]);
        total += A[i];
        total = total % 1000000007
    }
    return total
};



// beat 54.17%
/**
 * @param {number[]} A
 * @return {number}
 */

var sumSubarrayMins = function(A) {
    
    let left = new Array(A.length)
    let right = new Array(A.length)
    left[0] = 1
    
    for(let i = 1; i< A.length; i++){
        let p = i - 1;
        while(p>=0 && A[p] >= A[i]){
            p--
        }
        left[i] = i - p;
    }
    
    right[A.length -1] = 1
    for(let i = A.length -2; i>=0; i--){
        let p = i + 1;
        while(p< A.length && A[p] > A[i]){
            p++
        }
        right[i] = p - i;
    }
    let total = 0;
    
    
    for(let i = 0; i< A.length; i++){
        total += left[i] * right[i] * A[i] % 1000000007
        total = total % 1000000007
    }
    return total
};



//  beat 100%
/**
 * @param {number[]} A
 * @return {number}
 */

var sumSubarrayMins = function(A) {
    
    let left = new Array(A.length)
    let right = new Array(A.length)
    left[0] = -1
    
    for(let i = 1; i< A.length; i++){
        let p = i - 1;
        while(p>=0 && A[p] >= A[i]){
            p = left[p];
        }
        left[i] = p;
    }
    
    right[A.length -1] = A.length
    for(let i = A.length -2; i>=0; i--){
        let p = i + 1;
        while(p< A.length && A[p] > A[i]){
            p = right[p];
        }
        right[i] = p;
    }
    let total = 0;
    
    
    for(let i = 0; i< A.length; i++){
        total += (i - left[i]) * (right[i] - i) * A[i] % 1000000007
        total = total % 1000000007
    }
    return total
};