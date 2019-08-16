/*
Given a binary tree, return all root-to-leaf paths.

    Note: A leaf is a node with no children.

    Example:

Input:

      1
    /   \
   2     3
    \
    5

Output: ["1->2->5", "1->3"]

Explanation: All root-to-leaf paths are: 1->2->5, 1->3
*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Runtime: 56 ms, faster than 79.48% of JavaScript online submissions for Binary Tree Paths.
 * Memory Usage: 34.7 MB, less than 50.00% of JavaScript online submissions for Binary Tree Paths.
 * @param {TreeNode} root
 * @return {string[]}
 */



var binaryTreePaths = function(root) {
    let results = [];

    var search =(root, path, results) => {
        if(root === null) {
            return;
        };
        path.push(root.val)

        if(root.left === null && root.right === null){
            results.push(path.join('->'));
            path.pop()
            return;
        }

        search(root.left, path, results);
        search(root.right, path, results)
        path.pop()
    }

    search(root,[], results)

    return results;

};
