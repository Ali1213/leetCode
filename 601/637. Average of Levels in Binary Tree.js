/*
Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
    Example 1:
Input:
    3
    / \
  9  20
/  \
   15   7
Output: [3, 14.5, 11]
Explanation:
    The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
    Note:
The range of node's value is in the range of 32-bit signed integer.
*/

/**
 * Runtime: 72 ms, faster than 63.04% of JavaScript online submissions for Average of Levels in Binary Tree.
 * Memory Usage: 37.8 MB, less than 100.00% of JavaScript online submissions for Average of Levels in Binary Tree.
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const averageOfLevels = function (root) {
    const levels = [];
    let now = [root];
    let next = [];
    let total = 0;
    let count = 0;
    while (now.length > 0) {
        const n = now.shift();
        total += n.val;
        count += 1;
        if (n.left !== null) {
            next.push(n.left);
        }
        if (n.right !== null) {
            next.push(n.right);
        }
        if (now.length === 0) {
            now = next;
            next = [];
            levels.push(total / count);
            total = 0;
            count = 0;
        }
    }
    return levels;
};
