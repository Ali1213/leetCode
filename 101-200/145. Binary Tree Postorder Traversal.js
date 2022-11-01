// Given the root of a binary tree, return the postorder traversal of its nodes' values.

 

// Example 1:


// Input: root = [1,null,2,3]
// Output: [3,2,1]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]
 

// Constraints:

// The number of the nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Runtime: 83 ms, faster than 74.01% of JavaScript online submissions for Binary Tree Postorder Traversal.
Memory Usage: 42.3 MB, less than 39.27% of JavaScript online submissions for Binary Tree Postorder Traversal.
 * @param {TreeNode} root
 * @return {number[]}
 */
 var postorderTraversal = function(root) {
    const vals = []
    var transfer = (root) => {
        if(!root) return
        transfer(root.left)
        transfer(root.right)
        vals.push(root.val)
    }
    transfer(root)
    return vals
};
