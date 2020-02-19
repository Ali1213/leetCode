/*
Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).

    The binary search tree is guaranteed to have unique values.



    Example 1:

Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
Output: 32
Example 2:

Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
Output: 23


Note:

    The number of nodes in the tree is at most 10000.
The final answer is guaranteed to be less than 2^31.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Runtime: 164 ms, faster than 72.13% of JavaScript online submissions for Range Sum of BST.
 * Memory Usage: 67.1 MB, less than 61.54% of JavaScript online submissions for Range Sum of BST.
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function (root, L, R) {
    let total = 0

    const search = (root) => {
        if (root === null) return
        search(root.left)
        search(root.right)
        if(root.val >= L && root.val <= R) total += root.val
    }
    search(root)
    return total
}
