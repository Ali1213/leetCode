// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.


// Example:

// Given the sorted array: [-10,-3,0,5,9],

// One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

//       0
//      / \
//    -3   9
//    /   /
//  -10  5

// beat 100%

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums, start, end) {
  start = start || 0;
  end = end || nums.length;
  const len = end - start;
  if(len === 0) return null;
  if(len === 1) return new TreeNode(nums[start]);
  let pos = (len/2 >> 0) + start;
  let root = new TreeNode(nums[pos]);
  root.left = sortedArrayToBST(nums, start, pos);
  root.right = sortedArrayToBST(nums, pos+1, end);
  return root;
};