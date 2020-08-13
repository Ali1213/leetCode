/* 
Given a binary tree, return the inorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]
Follow up: Recursive solution is trivial, could you do it iteratively? 
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
 * Runtime: 72 ms, faster than 70.83% of JavaScript online submissions for Binary Tree Inorder Traversal.
 * Memory Usage: 37 MB, less than 6.59% of JavaScript online submissions for Binary Tree Inorder Traversal.
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    if(root === null) return []
    let list = [root, null]
    let hasNext = false
    while (true) {
        const now = list.shift()
        if(now === null){
            if(!hasNext) break;
            hasNext = false;
            list.push(now)
            continue;
        }
        if(typeof now === 'number'){
            list.push(now)
            continue;
        }
        if (now.left !== null) {
            hasNext = true
            list.push(now.left)
        }
        list.push(now.val)
        if (now.right !== null) {
            hasNext = true
            list.push(now.right)
        }
    }
    return list
};