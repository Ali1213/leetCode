package main

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func recoverTree(root *TreeNode) {
	var first, prev, second *TreeNode
	var dfs func(root *TreeNode)
	dfs = func (root *TreeNode) {
		if root == nil {
			return
		}
		dfs(root.Left)
		if prev != nil && prev.Val > root.Val {
			if first == nil {
				first = prev
			} 
			if first != nil {
				second = root
			}
		}
		prev = root
		// do something with root.val
		dfs(root.Right)
	}
	dfs(root)
	first.Val, second.Val = second.Val, first.Val
}
