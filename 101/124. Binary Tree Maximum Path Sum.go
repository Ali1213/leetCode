package main

import "math"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func maxPathSum(root *TreeNode) int {

	var dfs func(root *TreeNode) int
	max := math.MinInt
	dfs = func(root *TreeNode) int {
		if root == nil {
			return 0
		}

		left := Max(0, dfs(root.Left))
		right := Max(0, dfs(root.Right))
		max = Max(max, left+right+root.Val)
		return Max(left, right) + root.Val
	}
	dfs(root)
	return max
}

func Max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
