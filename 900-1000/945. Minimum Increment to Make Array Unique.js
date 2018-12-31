/* Given an array of integers A, a move consists of choosing any A[i], and incrementing it by 1.

Return the least number of moves to make every value in A unique.

 

Example 1:

Input: [1,2,2]
Output: 1
Explanation:  After 1 move, the array could be [1, 2, 3].
Example 2:

Input: [3,2,1,2,1,7]
Output: 6
Explanation:  After 6 moves, the array could be [3, 4, 1, 2, 5, 7].
It can be shown with 5 or less moves that it is impossible for the array to have all unique values.
 

Note:

0 <= A.length <= 40000
0 <= A[i] < 40000
 */

//  beat 89.13%
 /**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function(A) {
    let a = new Array(80000).fill(0)
    for(let i =0 ; i< A.length; i++){
        a[A[i]] ++;
    }
    
    let ans = 0,taken = 0;
    for(let i = 0; i< 80000; i++){
        if(a[i]>=2){
            taken += a[i] - 1;
            ans -= (a[i] - 1) * i;
        }else if( taken > 0 && a[i] === 0){
            taken--;
            ans += i
        }
    }
    
    return ans;
};