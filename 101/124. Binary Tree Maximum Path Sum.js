/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {

    let maxV = Number.MIN_SAFE_INTEGER

    const dfs = (root) => {
        if (!root) {
            return 0
        }
        const left = Math.max(0, dfs(root.left))
        const right = Math.max(0, dfs(root.right))
        maxV = Math.max(maxV, left + right + root.val)
        return Math.max(left, right) + root.val
    }
    dfs(root)
    return maxV
};