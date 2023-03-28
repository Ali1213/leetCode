/*
Invert a binary tree.

    Example:

Input:

      4
    /   \
   2     7
  / \   / \
 1   3 6   9
Output:

      4
    /   \
   7     2
  / \   / \
 9   6 3   1
Trivia:
    This problem was inspired by this original tweet by Max Howell:

    Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so f*** off.
*/


/**
 * Runtime: 60 ms, faster than 27.66% of JavaScript online submissions for Invert Binary Tree.
 * Memory Usage: 33.7 MB, less than 100.00% of JavaScript online submissions for Invert Binary Tree.
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */


var invertTree = function(root) {

    if(root === null) return root;
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    invertTree(root.left);
    invertTree(root.right);
    return root;
};



var invertTree = function(root) {

    if(root === null) return root;
    let result = new TreeNode(root.val);
    result.right = invertTree(root.left);
    result.left = invertTree(root.right);
    return result;
};
