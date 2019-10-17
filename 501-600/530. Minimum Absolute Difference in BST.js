/*
Given a binary search tree with non-negative values, find the minimum absolute difference between values of any two nodes.

Example:

Input:

   1
    \
     3
    /
   2

Output:
1

Explanation:
The minimum absolute difference is 1, which is the difference between 2 and 1 (or between 2 and 3).
*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Runtime: 76 ms, faster than 52.90% of JavaScript online submissions for Minimum Absolute Difference in BST.
 * Memory Usage: 38.1 MB, less than 100.00% of JavaScript online submissions for Minimum Absolute Difference in BST.
 * @param {TreeNode} root
 * @return {number}
 */

const getMinimumDifference1 = (root) => {
    const arr = [];
    const searchTree = (root) => {
        if (root === null) return;
        searchTree(root.left);
        arr.push(root.val);
        searchTree(root.right);
    };
    searchTree(root);
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i < arr.length; i++) {
        min = Math.min(arr[i] - arr[i - 1], min);
    }
    return min;
};

/**
 * Runtime: 64 ms, faster than 94.19% of JavaScript online submissions for Minimum Absolute Difference in BST.
 * Memory Usage: 37.7 MB, less than 100.00% of JavaScript online submissions for Minimum Absolute Difference in BST.
 */
const getMinimumDifference = (root) => {
    let lastVal = Number.MIN_SAFE_INTEGER;
    let min = Number.MAX_SAFE_INTEGER;
    const searchTree = (root) => {
        if (root === null) return;
        searchTree(root.left);
        min = Math.min(root.val - lastVal, min);
        lastVal = root.val;
        searchTree(root.right);
    };
    searchTree(root);
    return min;
};
