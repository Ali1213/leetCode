/*
Given a binary search tree (BST) with duplicates, find all the mode(s) (the most frequently occurred element) in the given BST.

    Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than or equal to the node's key.
The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
Both the left and right subtrees must also be binary search trees.


    For example:
    Given BST [1,null,2,2],

    1
    \
     2
     /
     2


return [2].

    Note: If a tree has more than one mode, you can return them in any order.

    Follow up: Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count).
*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * https://leetcode.com/problems/find-mode-in-binary-search-tree/
 * Runtime: 92 ms, faster than 23.67% of JavaScript online submissions for Find Mode in Binary Search Tree.
 * Memory Usage: 42.6 MB, less than 60.00% of JavaScript online submissions for Find Mode in Binary Search Tree.
 * @param {TreeNode} root
 * @return {number[]}
 */

const getAll = function (root, counts) {
    if (root == null) return;

    getAll(root.left, counts);
    counts[root.val] = (counts[root.val] || 0) + 1;
    getAll(root.right, counts);
};


const findMode1 = function (root) {
    if (root == null) return [];
    const counts = {

    };

    getAll(root, counts);

    let v = 0; let result = [];
    for (const k in counts) {
        if (counts[k] > v) {
            result = [Number(k)];
            v = counts[k];
        } else if (counts[k] === v) {
            result.push(Number(k));
        }
    }
    return result;
};
