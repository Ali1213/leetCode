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

func subtreeWithAllDeepest(root *TreeNode) *TreeNode {
	_, v:= deep(root)
	return v
}

func deep(root *TreeNode) (int,*TreeNode) {
	if root == nil {
		return 0, root
	}
	dL,leftMin := deep(root.Left)
	dR, rightMin  := deep(root.Right)

	if dL == dR {
		return dL + 1, root
	}

	if dL > dR {
		return dL + 1, leftMin
	} else {
		return dR + 1, rightMin
	}
}
