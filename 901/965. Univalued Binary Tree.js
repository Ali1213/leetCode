/*
A binary tree is univalued if every node in the tree has the same value.

    Return true if and only if the given tree is univalued.



    Example 1:


Input: [1,1,1,1,1,null,1]
Output: true
Example 2:


Input: [2,2,2,5,2]
Output: false


Note:

    The number of nodes in the given tree will be in the range [1, 100].
    Each node's value will be an integer in the range [0, 99].
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Runtime: 48 ms, faster than 95.79% of JavaScript online submissions for Univalued Binary Tree.
 * Memory Usage: 33.9 MB, less than 71.43% of JavaScript online submissions for Univalued Binary Tree.
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function (root, val = undefined) {
    if (root === null) return true
    if (val === undefined) val = root.val
    else {
        if (val !== root.val) return false
    }
    return isUnivalTree(root.left, val) && isUnivalTree(root.right, val)
}
