/* 
Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.

Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.

You may return any answer array that satisfies this condition.

 

Example 1:

Input: [4,2,5,7]
Output: [4,5,2,7]
Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.


Note:

2 <= A.length <= 20000
A.length % 2 == 0
0 <= A[i] <= 1000 */

// beat 89.69%
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    if(!A || A.length === 1) return A
    let odd = 1;
    let even = 0;
    let n = A.length-1;
    
    while(even < n){
                
        if(A[even]%2 !== 0){
            while( A[odd]%2 !== 0){
                odd += 2
            }
            let temp = A[even];
            A[even] = A[odd];
            A[odd] = temp;
        }
        even += 2
        
    }
    return A
};