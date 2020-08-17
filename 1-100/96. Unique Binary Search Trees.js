/* 
Given n, how many structurally unique BST's (binary search trees) that store values 1 ... n?

Example:

Input: 3
Output: 5
Explanation:
Given n = 3, there are a total of 5 unique BST's:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
 

Constraints:

1 <= n <= 19 

*/


/**
 * Runtime: 68 ms, faster than 60.53% of JavaScript online submissions for Unique Binary Search Trees.
 * Memory Usage: 36.6 MB, less than 8.67% of JavaScript online submissions for Unique Binary Search Trees.
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    let s = new Array(n + 1)
    s[0] = 1
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            if (!s[i]) s[i] = 0
            s[i] += s[j] * s[i - j - 1];
        }
    }
    return s[n]
};


const { normalTest } = require('../test')


const tests = [
    {
        params: [3],
        result: 5,
    },
]

normalTest(tests, numTrees)