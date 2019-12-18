/*
Given a binary tree, find the length of the longest path where each node in the path has the same value. This path may or may not pass through the root.

    The length of path between two nodes is represented by the number of edges between them.


    Example 1:

Input:

     5
    / \
   4   5
  / \   \
 1   1   5
Output: 2


Example 2:

Input:

     1
    / \
   4   5
  / \   \
 4   4   5
Output: 2


Note: The given binary tree has not more than 10000 nodes. The height of the tree is not more than 1000.
*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Runtime: 164 ms, faster than 87.04% of JavaScript online submissions for Longest Univalue Path.
 * Memory Usage: 51.8 MB, less than 85.71% of JavaScript online submissions for Longest Univalue Path.
 * @param {TreeNode} root
 * @return {number}
 */
const longestUnivaluePath = function (root) {
    let ans = 0;

    const preOrder = (root) => {
        if (root === null) return 0;

        const left = preOrder(root.left);
        const right = preOrder(root.right);

        let leftLen = 0;
        let rightLen = 0;
        if (root.left && root.val === root.left.val) {
            leftLen = left + 1;
        }
        if (root.right && root.val === root.right.val) {
            rightLen = right + 1;
        }
        ans = Math.max(ans, leftLen + rightLen);
        return Math.max(leftLen, rightLen);
    };
    preOrder(root);
    return ans;
};
