/* 

Given two arrays A and B of equal size, the advantage of A with respect to B is the number of indices i for which A[i] > B[i].

Return any permutation of A that maximizes its advantage with respect to B.

 

Example 1:

Input: A = [2,7,11,15], B = [1,10,4,11]
Output: [2,11,7,15]
Example 2:

Input: A = [12,24,8,32], B = [13,25,32,11]
Output: [24,32,8,12]
 

Note:

1 <= A.length = B.length <= 10000
0 <= A[i] <= 10^9
0 <= B[i] <= 10^9 
*/

// beat 94.29%
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var advantageCount = function(A, B) {
    A.sort((a,b)=> a-b);
    let c = B.slice(0).sort((a,b)=> a - b);
    let s = {}
    let i = 0, j = A.length - 1;
    while(j >= 0){
        if(c[j] < A[j+i]){
            if(s[c[j]]){
                s[c[j]].push(A[j+i])
            }else {
                s[c[j]] = [A[j+i]]
            }
            
        }else {
            if(s[c[j]]){
                s[c[j]].push(A[i])
            }else {
                s[c[j]] = [A[i]]
            }
            i += 1
        }
        j -= 1;
        
    }
    
    for(let i = 0; i< A.length; i++){
        A[i] = s[B[i]].pop()
    }
   return A 
};