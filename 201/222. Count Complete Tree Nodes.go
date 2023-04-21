package main

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

//  Runtime
// 6 ms
// Beats
// 100%
// Memory
// 7.4 MB
// Beats
// 65.75%
func countNodes(root *TreeNode) int {
	if root == nil {
		return 0
	}
	leftLen := getDepth(root.Left)
	rightLen := getDepth(root.Right)
	if leftLen == rightLen {
		return (1 << leftLen) + countNodes(root.Right)
	} else {
		return (1 << rightLen) + countNodes(root.Left)
	}
}

func getDepth(root *TreeNode) int {
	if root == nil {
		return 0
	}
	return 1 + getDepth(root.Left)
}
