/*
Given a Binary Search Tree and a target number, return true if there exist two elements in the BST such that their sum is equal to the given target.

    Example 1:

Input:
     5
    / \
   3   6
  / \   \
 2   4   7

Target = 9

Output: True


Example 2:

Input:
     5
    / \
   3   6
  / \   \
 2   4   7

Target = 28

Output: False
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Runtime: 88 ms, faster than 66.41% of JavaScript online submissions for Two Sum IV - Input is a BST.
 * Memory Usage: 41.5 MB, less than 100.00% of JavaScript online submissions for Two Sum IV - Input is a BST.
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
const findTarget = function (root, k) {
    const set = new Set();
    var transfrom = (root) => {
        if (root == null) return false;
        if (set.has(root.val)) return true;
        set.add(k - root.val);
        return transfrom(root.left) || transfrom(root.right);
    };
    return transfrom(root);
};
