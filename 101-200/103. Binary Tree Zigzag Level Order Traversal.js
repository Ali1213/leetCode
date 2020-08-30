/* Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
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
 * Runtime: 72 ms, faster than 91.55% of JavaScript online submissions for Binary Tree Zigzag Level Order Traversal.
 * Memory Usage: 37.6 MB, less than 32.48% of JavaScript online submissions for Binary Tree Zigzag Level Order Traversal.
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    if(root == null) return []
    const rtn = []

    function trans(rtn, level, levelNum) {
        if (level.length === 0) return
        let nextLevel = []
        let values = []
        while (level.length > 0) {
            let now = level.shift()
            values.push(now.val)
            if (now.left) {
                nextLevel.push(now.left)
            }
            if (now.right) {
                nextLevel.push(now.right)
            }
        }
        rtn.push(levelNum % 2 == 0 ? values.reverse() : values)
        trans(rtn, nextLevel, levelNum + 1)
    }
    trans(rtn, [root], 1)
    return rtn
};