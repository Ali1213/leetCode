/*
Consider all the leaves of a binary tree.  From left to right order, the values of those leaves form a leaf value sequence.


    For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

    Two binary trees are considered leaf-similar if their leaf value sequence is the same.

    Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.


    Note:

Both of the given trees will have between 1 and 100 nodes.
*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Runtime: 52 ms, faster than 92.73% of JavaScript online submissions for Leaf-Similar Trees.
 * Memory Usage: 34.9 MB, less than 25.00% of JavaScript online submissions for Leaf-Similar Trees.
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
const leafSimilar = function (root1, root2) {
    const getAllLeaf = (root, arr) => {
        if (root === null) return
        if (root.left == null && root.right == null) arr.push(root.val)
        getAllLeaf(root.left, arr)
        getAllLeaf(root.right, arr)
    }
    const r1 = []; const r2 = []
    getAllLeaf(root1, r1)
    getAllLeaf(root2, r2)
    if (r1.length !== r2.length) return false
    for (let i = 0; i < r1.length; i++) {
        if (r1[i] !== r2[i]) return false
    }
    return true
}
