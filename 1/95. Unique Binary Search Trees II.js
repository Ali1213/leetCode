/* 
Given an integer n, generate all structurally unique BST's (binary search trees) that store values 1 ... n.

Example:

Input: 3
Output:
[
  [1,null,3,2],
  [3,2,null,1],
  [3,1,null,null,2],
  [2,1,3],
  [1,null,2,null,3]
]
Explanation:
The above output corresponds to the 5 unique BST's shown below:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3 
   */


/**
 * Runtime: 92 ms, faster than 76.73% of JavaScript online submissions for Unique Binary Search Trees II.
 * Memory Usage: 42.6 MB, less than 61.46% of JavaScript online submissions for Unique Binary Search Trees II.
* Definition for a binary tree node.
* function TreeNode(val, left, right) {
*     this.val = (val===undefined ? 0 : val)
*     this.left = (left===undefined ? null : left)
*     this.right = (right===undefined ? null : right)
* }
*/
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {

	const dp = new Array(n + 1)
	dp[0] = []
	if (n == 0) return dp[0]
	dp[0].push(null)
	for (let len = 1; len <= n; len++) {
		dp[len] = []
		for (let root = 0; root < len; root++) {
			dp[root].forEach( leftTree => {
				dp[len - root  - 1].forEach( rightTree => {
					let rootTree = new TreeNode(root + 1)
					rootTree.left = leftTree
					rootTree.right = clone(rightTree, root + 1)
					dp[len].push(rootTree)
				})
			})
		}
	}
	return dp[n]

	function clone(tree, offset) {
		if (tree == null) {
			return null
		}
		const node = new TreeNode(tree.val + offset)
		node.left = clone(tree.left, offset)
		node.right = clone(tree.right, offset)
		return node
	}
};