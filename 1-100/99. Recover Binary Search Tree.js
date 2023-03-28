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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    
    var prev, first, second
    const inode = (node) => {
        if(!node){
            return 
        }
        inode(node.left)
        if(prev && prev.val > node.val){
            if(!first){
                first = prev
            }
            if(first){
                second = node
            }
        }
        prev = node

        inode(node.right)
    }
    inode(root)
    const temp = first.val
    first.val = second.val
    second.val = temp
};