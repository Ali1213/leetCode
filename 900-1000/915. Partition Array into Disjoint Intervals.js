/*
 Given an array A, partition it into two (contiguous) subarrays left and right so that:

Every element in left is less than or equal to every element in right.
left and right are non-empty.
left has the smallest possible size.
Return the length of left after such a partitioning.  It is guaranteed that such a partitioning exists.

 

Example 1:

Input: [5,0,3,8,6]
Output: 3
Explanation: left = [5,0,3], right = [8,6]
Example 2:

Input: [1,1,1,0,6,12]
Output: 4
Explanation: left = [1,1,1,0], right = [6,12]
 

Note:

2 <= A.length <= 30000
0 <= A[i] <= 10^6
It is guaranteed there is at least one way to partition A as described. 
*/


// beat  56.82% 

/**
 * @param {number[]} A
 * @return {number}
 */
var partitionDisjoint = function(A) {
    
    let rightMins = new Array(A.length+1);
    let leftMaxs = new Array(A.length+1);
    rightMins[A.length] = A[A.length -1];
    leftMaxs[0] = A[0]
    for(let i = 0; i< A.length; i++){
        leftMaxs[i+1] = Math.max(leftMaxs[i], A[i]);
        rightMins[A.length - i - 1] = Math.min(rightMins[A.length - i], A[A.length - i - 1]);
    }
    
    for(let i = 0; i < A.length; i++){
        if(leftMaxs[i]<= rightMins[i]){
            return i === 0 ? 1 : i;
        }
    }
    return A.length;
};



// beat 95.45%
/**
 * @param {number[]} A
 * @return {number}
 */
var partitionDisjoint = function(A) {
    
    let rightMins = new Array(A.length+1);
    let leftMaxs = new Array(A.length+1);
    rightMins[A.length-1] = A[A.length -1];
    leftMaxs[0] = A[0]
    for(let i = 1; i< A.length; i++){
        leftMaxs[i] = Math.max(leftMaxs[i-1], A[i]);
        rightMins[A.length - i - 1] = Math.min(rightMins[A.length - i], A[A.length - i - 1]);
    }
    
    for(let i = 0; i < A.length; i++){
        if(leftMaxs[i]<= rightMins[i+1]){
            return i + 1;
        }
    }
    return A.length;
};