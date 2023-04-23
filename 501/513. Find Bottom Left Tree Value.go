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
// Runtime
// 8 ms
// Beats
// 55.77%
// Memory
// 5.4 MB
// Beats
// 28.85%
func findBottomLeftValue(root *TreeNode) int {
	queue := []*TreeNode{root}
	var sum int
	for len(queue) > 0 {
		curs := queue
		if len(queue) > 0 {
			sum = queue[0].Val
		}
		queue = make([]*TreeNode, 0)
		for _, cur := range curs {
			if cur.Left != nil {
				queue = append(queue, cur.Left)
			}
			if cur.Right != nil {
				queue = append(queue, cur.Right)
			}
		}
	}
	return sum
}
