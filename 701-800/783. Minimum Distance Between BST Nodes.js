/*
Given a Binary Search Tree (BST) with the root node root, return the minimum difference between the values of any two different nodes in the tree.

    Example :

Input: root = [4,2,6,1,3,null,null]
Output: 1
Explanation:
    Note that root is a TreeNode object, not an array.

    The given tree [4,2,6,1,3,null,null] is represented by the following diagram:

    4
    /   \
      2      6
/ \
    1   3

while the minimum difference in this tree is 1, it occurs between node 1 and node 2, also between node 3 and node 2.
Note:

    The size of the BST will be between 2 and 100.
The BST is always valid, each node's value is an integer, and each node's value is different.
*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Runtime: 56 ms, faster than 70.06% of JavaScript online submissions for Minimum Distance Between BST Nodes.
 * Memory Usage: 34.7 MB, less than 100.00% of JavaScript online submissions for Minimum Distance Between BST Nodes.
 * @param {TreeNode} root
 * @return {number}
 * [90,69,null,49,89,null,52,null,null,null,null]   1
 */
var minDiffInBST = function (root) {
    let max = []
    const transfer = (root) => {
        if (root === null) return;
        transfer(root.left)
        max.push(root.val)
        transfer(root.right)
    }
    transfer(root)
    max.sort((a, b) => a-b)
    let x = max[1] - max[0]
    for (let i = 2; i < max.length; i++) {
        x = Math.min(max[i] - max[i-1], x)
    }
    return x
}
