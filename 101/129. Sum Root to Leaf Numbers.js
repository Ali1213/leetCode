// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumNumbers = (root) => {
    if (!root) return 0
    let queue = [root]
    let nextQue = []
    let sum = 0
    while (queue.length !== 0 || nextQue.length !== 0) {
        const v = queue.shift()
        if (v.left !== null) {
            v.left.val = v.val * 10 + v.left.val
            nextQue.push(v.left)
        }
        if (v.right !== null) {
            v.right.val = v.val * 10 + v.right.val
            nextQue.push(v.right)
        }
        if (v.left == null && v.right == null) {
            sum += v.val
        }
        if (queue.length == 0) {
            queue = nextQue
            nextQue = []
        }
    }
    return sum
}
