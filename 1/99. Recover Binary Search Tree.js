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
<<<<<<< HEAD:1-100/99. Recover Binary Search Tree.js
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
=======
const recoverTree = (root) => {

}
>>>>>>> 7b23857a6c54dadd53990744b56d435d2c61776c:1/99. Recover Binary Search Tree.js
