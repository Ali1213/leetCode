/* 
We write the integers of A and B (in the order they are given) on two separate horizontal lines.

Now, we may draw connecting lines: a straight line connecting two numbers A[i] and B[j] such that:

A[i] == B[j];
The line we draw does not intersect any other connecting (non-horizontal) line.
Note that a connecting lines cannot intersect even at the endpoints: each number can only belong to one connecting line.

Return the maximum number of connecting lines we can draw in this way.

 

Example 1:


Input: A = [1,4,2], B = [1,2,4]
Output: 2
Explanation: We can draw 2 uncrossed lines as in the diagram.
We cannot draw 3 uncrossed lines, because the line from A[1]=4 to B[2]=4 will intersect the line from A[2]=2 to B[1]=2.
Example 2:

Input: A = [2,5,1,2,5], B = [10,5,2,1,5,2]
Output: 3
Example 3:

Input: A = [1,3,7,1,7,5], B = [1,9,2,5,1]
Output: 2
 

Note:

1 <= A.length <= 500
1 <= B.length <= 500
1 <= A[i], B[i] <= 2000
 */
const assert = require('assert')

/**
 * Runtime: 68 ms, faster than 87.37% of JavaScript online submissions for Uncrossed Lines.
 * Memory Usage: 38.1 MB, less than 43.40% of JavaScript online submissions for Uncrossed Lines.
* @param {number[]} A
* @param {number[]} B
* @return {number}
*/
var maxUncrossedLines = function (A, B) {
    var d = new Array(A.length + 1)
    for (let i = 0; i < d.length; i++) {
        d[i] = new Array(B.length + 1)
        d[i].fill(0)
    }
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            if (A[i] === B[j]) {
                d[i + 1][j + 1] = 1 + d[i][j]
            } else {
                d[i + 1][j + 1] = Math.max(d[i][j + 1], d[i + 1][j])
            }
        }
    }
    return d[A.length][B.length]
};


assert.equal(maxUncrossedLines([1, 4, 2], [1, 2, 4]), 2)
assert.equal(maxUncrossedLines([2, 5, 1, 2, 5], [10, 5, 2, 1, 5, 2]), 3)
assert.equal(maxUncrossedLines([1, 3, 7, 1, 7, 5], [1, 9, 2, 5, 1]), 2)
assert.equal(maxUncrossedLines([4, 2, 1, 4, 2, 2, 5, 1, 4, 4, 1, 2, 4, 2, 1, 4, 1, 4, 1, 5], [4, 3, 4, 4, 3, 3, 1, 1, 4, 2, 3, 2, 5, 1, 2]), 8)

