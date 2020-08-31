/* 
Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

Note: A leaf is a node with no children.

Example:

Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \    / \
7    2  5   1
Return:

[
   [5,4,11,2],
   [5,8,4,5]
] 
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Runtime: 92 ms, faster than 79.19% of JavaScript online submissions for Path Sum II.
 * Memory Usage: 39.9 MB, less than 65.41% of JavaScript online submissions for Path Sum II.
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
    const result = []
    if(root == null) return result
    function traverse(tree, total, value, list) {
        value += tree.val
        list.push(tree.val)
        if(!tree.left && !tree.right){
            if(value === total){
                result.push(list.slice())
            }
        }

        if (tree.left) {
            traverse(tree.left, total, value, list)
            list.pop()
        }

        if (tree.right) {
            traverse(tree.right, total, value, list)
            list.pop()
        }
    }
    traverse(root, sum, 0, [])
    return result
};