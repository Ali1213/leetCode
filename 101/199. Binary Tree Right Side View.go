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