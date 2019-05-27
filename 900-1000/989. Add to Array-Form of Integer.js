/* For a non-negative integer X, the array-form of X is an array of its digits in left to right order.  For example, if X = 1231, then the array form is [1,2,3,1].

Given the array-form A of a non-negative integer X, return the array-form of the integer X+K.

 

Example 1:

Input: A = [1,2,0,0], K = 34
Output: [1,2,3,4]
Explanation: 1200 + 34 = 1234
Example 2:

Input: A = [2,7,4], K = 181
Output: [4,5,5]
Explanation: 274 + 181 = 455
Example 3:

Input: A = [2,1,5], K = 806
Output: [1,0,2,1]
Explanation: 215 + 806 = 1021
Example 4:

Input: A = [9,9,9,9,9,9,9,9,9,9], K = 1
Output: [1,0,0,0,0,0,0,0,0,0,0]
Explanation: 9999999999 + 1 = 10000000000
 

Note：

1 <= A.length <= 10000
0 <= A[i] <= 9
0 <= K <= 10000
If A.length > 1, then A[0] != 0 
*/

/**
 * Runtime: 124 ms, faster than 71.68% of JavaScript online submissions for Add to Array-Form of Integer.
 * Memory Usage: 38.5 MB, less than 85.71% of JavaScript online submissions for Add to Array-Form of Integer.
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
    var reverseA = A.reverse()
    let i = 0
    while (K > 0) {
        const v = K % 10;
        K = (K - v) / 10
        if (reverseA[i] === undefined) {
            reverseA[i] = 0
        }

        reverseA[i] = reverseA[i] + v;
        if (reverseA[i] > 9) {
            K += 1
            reverseA[i] = reverseA[i] - 10
        }
        i++;
    }
    return reverseA.reverse()
};


console.log(addToArrayForm([1, 2, 0, 0], 34))
console.log(addToArrayForm([2, 7, 4], 181))
console.log(addToArrayForm([2, 1, 5], 806))
console.log(addToArrayForm([9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 1))