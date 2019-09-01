/*
Find the sum of all left leaves in a given binary tree.

    Example:

     3
    / \
   9  20
     /  \
    15   7

There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.
*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Runtime: 52 ms, faster than 86.14% of JavaScript online submissions for Sum of Left Leaves.
 * Memory Usage: 34.2 MB, less than 100.00% of JavaScript online submissions for Sum of Left Leaves.
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
    if (root === null) return 0;
    const getValue = (root, isLeft) => {
        let n = 0;
        if (root.left === null && root.right === null) return isLeft ? root.val : n;
        if (root.left !== null) {
            n += getValue(root.left, true);
        }

        if (root.right !== null) {
            n += getValue(root.right, false);
        }
        return n
    };
    return getValue(root, false);
};
