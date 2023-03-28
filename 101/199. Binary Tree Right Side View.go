package main

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func rightSideView(root *TreeNode) []int {
	queue := []*TreeNode{
		root,
	}
	result := make([]int, 0)
	if root == nil {
		return result
	}
	for len(queue) > 0 {
		curs := queue
		queue = make([]*TreeNode, 0)
		result = append(result, curs[len(curs)-1].Val)
		for _, cur := range curs {
			if cur.Left != nil {
				queue = append(queue, cur.Left)
			}
			if cur.Right != nil {
				queue = append(queue, cur.Right)
			}
		}
	}
	return result
}

// Runtime
// 0 ms
// Beats
// 100%
// Memory
// 2.3 MB
// Beats
// 61.2%
func rightSideView2(root *TreeNode) []int {
	queue := []*TreeNode{
		root,
	}
	result := make([]int, 0)
	if root == nil {
		return result
	}
	pos := 0
	for i := 0; i < len(queue); i++ {
		cur := queue[i]
		if cur.Left != nil {
			queue = append(queue, cur.Left)
		}
		if cur.Right != nil {
			queue = append(queue, cur.Right)
		}
		if i == pos {
			result = append(result, queue[pos].Val)
			pos = len(queue) - 1
		}
	}
	return result
}
