/* 
Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

You may return any answer array that satisfies this condition.

 

Example 1:

Input: [3,1,2,4]
Output: [2,4,3,1]
The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
 

Note:

1 <= A.length <= 5000
0 <= A[i] <= 5000
 */

// beat 73.59%
/**
* @param {number[]} A
* @return {number[]}
*/
var sortArrayByParity = function (A) {
    if (A === null || A.length < 2) return A
    let pos = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 == 0) {
            [A[i], A[pos]] = [A[pos], A[i]]
            pos++
        }
    }
    return A
};


// beat 99.95%
// 看来解构赋值的效率还是略微有点低啊
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    if(A === null || A.length<2) return A
    let pos=0;
    for(let i = 0;i<A.length;i++){
        if(A[i]%2==0){
            let temp = A[i];
            A[i] = A[pos];
            A[pos] = temp;
            pos += 1;
        }
    }
    return A
};