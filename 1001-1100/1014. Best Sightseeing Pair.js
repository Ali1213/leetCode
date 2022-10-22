/* 
Given an array A of positive integers, A[i] represents the value of the i-th sightseeing spot, and two sightseeing spots i and j have distance j - i between them.

The score of a pair (i < j) of sightseeing spots is (A[i] + A[j] + i - j) : the sum of the values of the sightseeing spots, minus the distance between them.

Return the maximum score of a pair of sightseeing spots.

 

Example 1:

Input: [8,1,5,2,6]
Output: 11
Explanation: i = 0, j = 2, A[i] + A[j] + i - j = 8 + 5 + 0 - 2 = 11
 

Note:

2 <= A.length <= 50000
1 <= A[i] <= 1000
*/

/**
 * Runtime: 72 ms, faster than 91.27% of JavaScript online submissions for Best Sightseeing Pair.
 * Memory Usage: 40.4 MB, less than 28.16% of JavaScript online submissions for Best Sightseeing Pair.
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function (A) {
    let max = 0, cur = 0;
    for (let i = 0; i < A.length; i++) {
        max = Math.max(max, cur + A[i])
        cur = Math.max(cur, A[i]) - 1
    }
    return max;
};