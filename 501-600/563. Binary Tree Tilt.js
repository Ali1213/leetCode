/*
Given a binary tree, return the tilt of the whole tree.

The tilt of a tree node is defined as the absolute difference between the sum of all left subtree node values and the sum of all right subtree node values. Null node has tilt 0.

The tilt of the whole tree is defined as the sum of all nodes' tilt.

Example:
Input:
         1
       /   \
      2     3
Output: 1
Explanation:
Tilt of node 2 : 0
Tilt of node 3 : 0
Tilt of node 1 : |2-3| = 1
Tilt of binary tree : 0 + 0 + 1 = 1
Note:

The sum of node values in any subtree won't exceed the range of 32-bit integer.
All the tilt values won't exceed the range of 32-bit integer.
 */


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Runtime: 68 ms, faster than 71.97% of JavaScript online submissions for Binary Tree Tilt.
 * Memory Usage: 37.7 MB, less than 50.00% of JavaScript online submissions for Binary Tree Tilt.
 * @param {TreeNode} root
 * @return {number}
 */
function findTilt(root) {
    let total = 0;

    const translate = (root) => {
        if (root === null) return 0;
        const left = translate(root.left);
        const right = translate(root.right);
        const v = Math.abs(left - right);
        total += v;
        return root.val + left + right;
    };

    translate(root);
    return total;
}


const { diffTreeTest } = require('../test');

const tests = [
    {
        params: [[1, 2, 3]],
        result: 1,
    },
    {
        params: [[1, 2, 3, 4, null, 5]],
        result: 11,
    },
];

diffTreeTest(tests, findTilt);
