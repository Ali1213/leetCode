// Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// Example:
// Given a binary tree
//           1
//          / \
//         2   3
//        / \
//       4   5
// Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

// Note: The length of path between two nodes is represented by the number of edges between them.


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Runtime: 64 ms, faster than 70.38% of JavaScript online submissions for Diameter of Binary Tree.
 * Memory Usage: 37.1 MB, less than 37.50% of JavaScript online submissions for Diameter of Binary Tree.
 * @param {TreeNode} root
 * @return {number}
 */
const diameterOfBinaryTree = function (root) {
    if (root === null) return 0;
    let ans = 1;
    const depth = (node) => {
        if (node === null) return 0;
        const L = depth(node.left);
        const R = depth(node.right);
        ans = Math.max(ans, L + R + 1);
        return Math.max(L, R) + 1;
    };
    depth(root);

    return ans - 1;
};


const { diffTreeTest } = require('../test');

const tests = [
    {
        params: [[1, 2, 3, 4, 5]],
        result: 3,
    },
    {
        params: [[]],
        result: 0,
    },
    {
        params: [[4, -7, -3, null, null, -9, -3, 9, -7, -4, null, 6, null, -6, -6, null, null, 0, 6, 5, null, 9, null, null, -1, -4, null, null, null, -2]],
        result: 8,
    },
];

diffTreeTest(tests, diameterOfBinaryTree);
