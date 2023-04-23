/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    if(cloned == null) return null
    if(cloned.val == target.val) return cloned
    let queue = [cloned]
    while(queue.length > 0){
        let cur = queue.shift()
        if(cur.val == target.val) return cur
        if(cur.left) queue.push(cur.left)
        if(cur.right) queue.push(cur.right)
    }
    return null
};