/*
In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

    We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

    Return true if and only if the nodes corresponding to the values x and y are cousins.



    Example 1:


Input: root = [1,2,3,4], x = 4, y = 3
Output: false
Example 2:


Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
Output: true
Example 3:



Input: root = [1,2,3,null,4], x = 2, y = 3
Output: false


Note:

    The number of nodes in the tree will be between 2 and 100.
Each node has a unique integer value from 1 to 100.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Runtime: 60 ms, faster than 58.07% of JavaScript online submissions for Cousins in Binary Tree.
 * Memory Usage: 34.9 MB, less than 100.00% of JavaScript online submissions for Cousins in Binary Tree.
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
    const depth = {

    }
    const parent = {

    }
    const search = (r, dep, val) => {
        if (r == null) return
        depth[r.val] = dep;
        parent[r.val] = val
        search(r.left, dep + 1, r.val)
        search(r.right, dep + 1 , r.val)
    }
    search(root, 0, null)
    return depth[x] === depth[y] && parent[x] !== parent[y]
}
