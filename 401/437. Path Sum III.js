/*
You are given a binary tree in which each node contains an integer value.

    Find the number of paths that sum to a given value.

    The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).

The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.

    Example:

root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

     10
    /  \
    5   -3
   / \    \
  3   2   11
 / \   \
3  -2   1

Return 3. The paths that sum to 8 are:

1.  5 -> 3
2.  5 -> 2 -> 1
3. -3 -> 11

*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Runtime: 72 ms, faster than 84.08% of JavaScript online submissions for Path Sum III.
 * Memory Usage: 37.1 MB, less than 66.67% of JavaScript online submissions for Path Sum III.
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */

var searchNext = (root, store, sum, v) => {
    if (root === null) return;
    store.push(root.val);
    let total = 0;
    for (let i = store.length - 1; i >= 0; i--) {
        total += store[i];
        if (total === sum) {
            v.count += 1;
        }
    }
    searchNext(root.left, store, sum, v);
    searchNext(root.right, store, sum, v);

    store.pop();
};

const pathSum = function (root, sum) {
    if (root === null) return 0;
    const v = { count: 0 };
    searchNext(root, [], sum, v);
    return v.count;
};
