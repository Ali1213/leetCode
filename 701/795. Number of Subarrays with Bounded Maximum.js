/* We are given an array A of positive integers, and two positive integers L and R (L <= R).

Return the number of (contiguous, non-empty) subarrays such that the value of the maximum array element in that subarray is at least L and at most R.

Example :
Input: 
A = [2, 1, 4, 3]
L = 2
R = 3
Output: 3
Explanation: There are three subarrays that meet the requirements: [2], [2, 1], [3].
Note:

L, R  and A[i] will be an integer in the range [0, 10^9].
The length of A will be in the range of [1, 50000]. */


/**
 * 思路
 * 假设数组为[2,2,1,1,3,4,2] L=2,R=3
 * 从数组左边往右边数，每一个数我们视为一层，
 * i=0时, [2]
 * i=1时, [2,2], [2]
 * 此时可发现规律， 如果正常情况，不考虑L和R， 每一层都是上一层+1
 * 但是考虑L和R的话， 就有几个例外
 * 1.如果这个数>R, 则从下一层我们要清空之前的历史
 * 2.如果这个数<R
 * i=2时, [2,2,1],[2,1]
 *    此时这一层不会比上一层+1，因为[1]这个是会被抛弃的。
 *    我们接着往下数
 * i=3时, [2,2,1,1],[2,1,1] 这个跟上一个情况一样
 *    接下来便到了另外一个特殊情况
 * i=4时，[2,2,1,1,3],[2,1,1,3]
 *    这个时候我们还考虑到两个之前的1，那么就有[1,1,3],[1,3]
 *    所以我们在解法中用一个数计算小于L的数的个数
 *      
 */

// beat 100%
/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var numSubarrayBoundedMax = function(A, L, R) {
    let total = 0
    
    let before = 0, countlow = 0;
    for(let i = 0; i< A.length; i++){
        if(A[i] > R){
            before = 0;
            countlow = 0;
        }else if(A[i] < L){
            total += before;
            countlow += 1;
        }else {
            before = before + 1 + countlow;
            countlow = 0;
            total += before;
        }
    }
    return total;
};