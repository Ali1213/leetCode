/* 
Given an array A of non-negative integers, return the maximum sum of elements in two non-overlapping (contiguous) subarrays, which have lengths L and M.  (For clarification, the L-length subarray could occur before or after the M-length subarray.)

Formally, return the largest V for which V = (A[i] + A[i+1] + ... + A[i+L-1]) + (A[j] + A[j+1] + ... + A[j+M-1]) and either:

0 <= i < i + L - 1 < j < j + M - 1 < A.length, or
0 <= j < j + M - 1 < i < i + L - 1 < A.length.
 

Example 1:

Input: A = [0,6,5,2,2,5,1,9,4], L = 1, M = 2
Output: 20
Explanation: One choice of subarrays is [9] with length 1, and [6,5] with length 2.
Example 2:

Input: A = [3,8,1,3,2,1,8,9,0], L = 3, M = 2
Output: 29
Explanation: One choice of subarrays is [3,8,1] with length 3, and [8,9] with length 2.
Example 3:

Input: A = [2,1,5,6,0,9,5,0,3,8], L = 4, M = 3
Output: 31
Explanation: One choice of subarrays is [5,6,0,9] with length 4, and [3,8] with length 3.
 

Note:

L >= 1
M >= 1
L + M <= A.length <= 1000
0 <= A[i] <= 1000
 */


/**
 * Runtime: 52 ms, faster than 98.62% of JavaScript online submissions for Maximum Sum of Two Non-Overlapping Subarrays.
 * Memory Usage: 34.9 MB, less than 83.49% of JavaScript online submissions for Maximum Sum of Two Non-Overlapping Subarrays.
 * @param {number[]} A
 * @param {number} L
 * @param {number} M
 * @return {number}
 */
var maxSumTwoNoOverlap = function (A, L, M) {
    let nowL = 0, nowM = 0, maxL = 0, maxM = 0, max = 0;

    for (let i = 0; i < A.length; i++) {
        nowM += A[i]
        if (i - M >= 0) {
            nowM -= A[i - M]
            nowL += A[i - M]
        }
        if (i - M - L >= 0) nowL -= A[i - M - L]
        maxL = Math.max(maxL, nowL)
        max = Math.max(max, nowM + maxL)
    }

    nowL = nowM = maxL = maxM = 0

    for (let i = 0; i < A.length; i++) {
        nowL += A[i]
        if (i - L >= 0) {
            nowL -= A[i - L]
            nowM += A[i - L]
        }
        if (i - M - L >= 0) nowM -= A[i - M - L]
        maxM = Math.max(maxM, nowM)
        max = Math.max(max, maxM + nowL)
    }
    return max
};



console.log(maxSumTwoNoOverlap([0, 6, 5, 2, 2, 5, 1, 9, 4], 1, 2))
console.log(maxSumTwoNoOverlap([3, 8, 1, 3, 2, 1, 8, 9, 0], 3, 2))
console.log(maxSumTwoNoOverlap([2, 1, 5, 6, 0, 9, 5, 0, 3, 8], 4, 3))