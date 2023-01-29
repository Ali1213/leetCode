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
var deepestLeavesSum = function(root) {
    if(root == null) return 0
    let now = [
    root
    ]
    let next = []
    let store = [root]
    while(now.length != 0){
        let cur = now.shift()
        if(cur.left) next.push(cur.left)
        if(cur.right) next.push(cur.right)
        if(now.length == 0 && next.length != 0) {
            now = next 
            store = next.slice(0)
            next = []
        }
    }
    return store.reduce((prev,item) => prev + item.val, 0)
};