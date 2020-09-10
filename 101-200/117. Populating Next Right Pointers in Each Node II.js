/* 
Given a binary tree

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

 

Follow up:

You may only use constant extra space.
Recursive approach is fine, you may assume implicit stack space does not count as extra space for this problem.
 

Example 1:



Input: root = [1,2,3,4,5,null,7]
Output: [1,#,2,3,#,4,5,7,#]
Explanation: Given the above binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.
 

Constraints:

The number of nodes in the given tree is less than 6000.
-100 <= node.val <= 100 
*/


/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * Runtime: 92 ms, faster than 93.96% of JavaScript online submissions for Populating Next Right Pointers in Each Node II.
 * Memory Usage: 41.3 MB, less than 79.10% of JavaScript online submissions for Populating Next Right Pointers in Each Node II.
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  let head = null
  let prev = null
  let cur = root

  while (cur != null) {

    while (cur != null) {

      if (cur.left != null) {
        if (prev != null) {
          prev.next = cur.left
        } else {
          head = cur.left
        }
        prev = cur.left
      }

      if (cur.right != null) {
        if (prev != null) {
          prev.next = cur.right
        } else {
          head = cur.right
        }
        prev = cur.right
      }

      cur = cur.next
    }

    cur = head
    prev = null
    head = null
  }
  return root
};