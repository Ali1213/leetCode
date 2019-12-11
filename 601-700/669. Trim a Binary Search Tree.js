/*
Given a binary search tree and the lowest and highest boundaries as L and R, trim the tree so that all its elements lies in [L, R] (R >= L). You might need to change the root of the tree, so the result should return the new root of the trimmed binary search tree.

    Example 1:
Input:
    1
    / \
  0   2

L = 1
R = 2

Output:
    1
      \
       2
Example 2:
Input:
    3
    / \
  0   4
   \
    2
    /
    1

L = 1
R = 3

Output:
    3
    /
    2
    /
    1
*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Runtime: 60 ms, faster than 96.87% of JavaScript online submissions for Trim a Binary Search Tree.
 * Memory Usage: 39.5 MB, less than 100.00% of JavaScript online submissions for Trim a Binary Search Tree.
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
var trimBST = function(root, L, R) {

    if(root === null) return root;
    if(root.val < L || root.val > R){
        let l = trimBST(root.left, L, R);
        let r = trimBST(root.right, L, R);
        if(l == null) return r;
        if(r == null) return l;
    }

    root.left = trimBST(root.left, L, R);
    root.right = trimBST(root.right, L, R);

    return root;
};
