// Given inorder and postorder traversal of a tree, construct the binary tree.

// Note:
// You may assume that duplicates do not exist in the tree.

// For example, given

// inorder = [9,3,15,20,7]
// postorder = [9,15,7,20,3]
// Return the following binary tree:

//     3
//    / \
//   9  20
//     /  \
//    15   7


// beat 89.87%

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

var genTree = (inorder,postorder,iBegin,iEnd,pBegin,pEnd) => {
    // console.log(pBegin,pEnd,iBegin,iEnd)

    if(iBegin>iEnd) return null;
    let root = new TreeNode(postorder[pEnd]);
    if(iBegin === iEnd) return root;
    let pos=iBegin;
    for(let i = iBegin; i<= iEnd;i++){
        if(inorder[i] === postorder[pEnd]){
            pos = i;
            break;
        }
    }

    let left = pos-iBegin;
    root.left = genTree(inorder,postorder,iBegin,pos-1,pBegin,pBegin+left-1);
    root.right = genTree(inorder,postorder,pos+1,iEnd,pBegin+left,pEnd-1);
    return root;
}


var buildTree = function(inorder, postorder) {
    if(inorder === null || inorder.length === 0) return inorder;
    return genTree(inorder,postorder,0,inorder.length-1,0,postorder.length-1)
};