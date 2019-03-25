/*
Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

 

Example 1:

Input: [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Example 2:

Input: [-7,-3,2,3,11]
Output: [4,9,9,49,121]
 

Note:

1 <= A.length <= 10000
-10000 <= A[i] <= 10000
A is sorted in non-decreasing order
*/



/**
 * faster 59.07%
 * less then 20.35%
 *
 * 最简单的思路是先把他们都平方，再进行排序
 *
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
    return A.map(item => Math.pow(item, 2)).sort((a, b) => a - b)
};


/**
 * faster 99.79%
 * less then 94.81%
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    if(A == null || A.length === 0 ) return A
    
    if(A[0]< 0){
        
        if(A[A.length-1] < 0){
            A.reverse();
        } else {
            let i = 0;
            while(A[i] < 0){
                i++;
            }
            let s1 = A.slice(0, i);
            let s2 = A.slice(i)
            i = 0;
            let i1 = s1.length - 1, i2=0;
            while(i1 >= 0 && i2<s2.length){
                if( s2[i2] + s1[i1] > 0){
                    A[i] = s1[i1]
                    i1--;
                } else {
                    A[i] = s2[i2]
                    i2++;
                }
                i++
            }
            
            
            while(i1 >=0){
                A[i] = s1[i1]
                i1--;
                i++;
            }
            while(i2< s2.length){
                A[i] = s2[i2];
                i2++;
                i++
            }
            
        }
        
    }
    
    for(let i = 0; i< A.length; i++){
        A[i] = Math.pow(A[i],2)
    }
    return A
};