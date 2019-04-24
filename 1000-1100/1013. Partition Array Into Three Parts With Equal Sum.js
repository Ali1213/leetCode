/* Given an array A of integers, return true if and only if we can partition the array into three non-empty parts with equal sums.

Formally, we can partition the array if we can find indexes i+1 < j with (A[0] + A[1] + ... + A[i] == A[i+1] + A[i+2] + ... + A[j-1] == A[j] + A[j-1] + ... + A[A.length - 1])

 

Example 1:

Input: [0,2,1,-6,6,-7,9,1,2,0,1]
Output: true
Explanation: 0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
Example 2:

Input: [0,2,1,-6,6,7,9,-1,2,0,1]
Output: false
Example 3:

Input: [3,3,6,5,-2,2,5,1,-9,4]
Output: true
Explanation: 3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4
 

Note:

3 <= A.length <= 50000
-10000 <= A[i] <= 10000 
*/


/**
 * Runtime: 72 ms, faster than 100.00% of JavaScript online submissions for Partition Array Into Three Parts With Equal Sum.
 * Memory Usage: 39.8 MB, less than 100.00% of JavaScript online submissions for Partition Array Into Three Parts With Equal Sum.
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function (A) {
    let count = 0;
    for (let i = 0; i < A.length; i++) {
        count += A[i]
    }
    count = count / 3
    if (count % 1 != 0) return false;
    let c = 0
    for (let i = 0; i < A.length - 2; i++) {
        c += A[i];
        if (c !== count) continue
        let d = 0;
        for (let j = i + 1; j < A.length - 1; j++) {
            d += A[j];
            if (d === count) return true;

        }
    }
    return false;
};