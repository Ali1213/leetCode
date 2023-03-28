/*
Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

    According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Given binary search tree:  root = [6,2,8,0,4,7,9,null,null,3,5]




Example 1:

Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.
Example 2:

Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
Output: 2
Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.


    Note:

All of the nodes' values will be unique.
p and q are different and both values will exist in the BST.

*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Runtime: 76 ms, faster than 78.46% of JavaScript online submissions for Lowest Common Ancestor of a Binary Search Tree.
 * Memory Usage: 43.7 MB, less than 100.00% of JavaScript online submissions for Lowest Common Ancestor of a Binary Search Tree.
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

var findInTree = (root, q, arr) => {
    arr.push(root)
    if (root.val > q.val) {
        return findInTree(root.left, q, arr)
    } else if (root.val < q.val) {
        return findInTree(root.right, q, arr)
    } else {
        return arr;
    }
}

var lowestCommonAncestor = function (root, p, q) {
    let qA = findInTree(root, q, [])
    let pA = findInTree(root, p, [])

    let i = qA.length > pA.length ? pA.length - 1 : qA.length - 1;
    while(i >= 0){
        if(qA[i].val === pA[i].val) return pA[i];
        i--;
    }
};
