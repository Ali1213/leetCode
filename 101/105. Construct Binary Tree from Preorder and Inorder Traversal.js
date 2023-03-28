// Given preorder and inorder traversal of a tree, construct the binary tree.

// Note:
// You may assume that duplicates do not exist in the tree.

// For example, given

// preorder = [3,9,20,15,7]
// inorder = [9,3,15,20,7]
// Return the following binary tree:

//     3
//    / \
//   9  20
//     /  \
//    15   7

// beat 94.74%
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

var genTree = (preorder,inorder,pBegin,pEnd,iBegin,iEnd) => {
    // console.log(pBegin,pEnd,iBegin,iEnd)
    if(pBegin>pEnd) return null;
    let root = new TreeNode(preorder[pBegin]);
    if(pEnd === pBegin) return root;
    let pos=iBegin;
    for(let i = iBegin; i<= iEnd;i++){
        if(inorder[i] === preorder[pBegin]){
            pos = i;
            break;
        }
    }
    let left = pos-iBegin;
    root.left = genTree(preorder,inorder,pBegin+1,pBegin+left,iBegin,pos-1);
    root.right = genTree(preorder,inorder,pBegin+1+left,pEnd,pos+1,iEnd);
    return root;
}


var buildTree = function(preorder, inorder) {
    if(preorder === null || preorder.length === 0) return preorder;
    return genTree(preorder,inorder,0,preorder.length-1,0,inorder.length-1)
    
};