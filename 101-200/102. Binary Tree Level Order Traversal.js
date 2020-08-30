/* 
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
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
 * Runtime: 88 ms, faster than 44.42% of JavaScript online submissions for Binary Tree Level Order Traversal.
 * Memory Usage: 38.2 MB, less than 65.32% of JavaScript online submissions for Binary Tree Level Order Traversal.
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (root == null) return []
    let levels = []
    let levelValue = []
    let nowLevel = [root]
    let nextLevel = []
    while (nowLevel.length || nextLevel.length) {
        if (nowLevel.length === 0) {
            nowLevel = nextLevel;
            nextLevel = []
            levels.push(levelValue)
            levelValue = []
        }
        let v = nowLevel.shift()
        levelValue.push(v.val)
        if (v.left) {
            nextLevel.push(v.left)
        }
        if (v.right) {
            nextLevel.push(v.right)
        }
    }
    if(levelValue.length !== 0){
        levels.push(levelValue)
    }
    return levels
};

