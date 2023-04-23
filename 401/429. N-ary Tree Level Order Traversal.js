/*
Given an n-ary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example, given a 3-ary tree:


    We should return its level order traversal:

    [
        [1],
        [3,2,4],
        [5,6]
    ]


Note:

    The depth of the tree is at most 1000.
The total number of nodes is at most 5000.
*
 */

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * Runtime: 620 ms, faster than 40.95% of JavaScript online submissions for N-ary Tree Level Order Traversal.
 * Memory Usage: 81.3 MB, less than 20.00% of JavaScript online submissions for N-ary Tree Level Order Traversal.
 * @param {Node} root
 * @return {number[][]}
 */
const levelOrder = function (root) {
    if(root === null) return root
    const rs = [];
    let queue = [root];
    let r = [];
    let nextqueue = [];
    while (queue.length > 0) {
        const ele = queue.shift();
        r.push(ele.val);
        nextqueue = nextqueue.concat(ele.children);

        if (queue.length === 0) {
            queue = nextqueue;
            nextqueue = [];
            rs.push(r);
            r = [];
        }
    }
    return rs;
};
