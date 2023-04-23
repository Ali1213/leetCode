package main

import "math"

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

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
//  Runtime
//  0 ms
//  Beats
//  100%
//  Memory
//  6.2 MB
//  Beats
//  9.9%
type TreeNodeWithN struct {
	Tree   *TreeNode
	Parent *TreeNodeWithN
	Count  int
}

func lcaDeepestLeaves(root *TreeNode) *TreeNode {
	queue := make([]*TreeNodeWithN, 0)
	queue = append(queue, &TreeNodeWithN{
		Tree: root,
	})
	for len(queue) > 0 {
		level := queue[:]
		i := 0
		for len(level) > 0 {
			cur := level[0]
			i++
			if cur.Tree.Left != nil {
				queue = append(queue, &TreeNodeWithN{
					Tree:   cur.Tree.Left,
					Parent: cur,
				})
			}

			if cur.Tree.Right != nil {
				queue = append(queue, &TreeNodeWithN{
					Tree:   cur.Tree.Right,
					Parent: cur,
				})
			}
			level = level[1:]
		}
		if i == len(queue) {
			break
		}
		queue = queue[i:]
	}
	result := math.MaxInt32
	var min *TreeNode = queue[0].Tree
	for _, node := range queue {
		now := node
		for now != nil {

			now.Count++
			if now.Count == len(queue) && now.Count < result {
				result = now.Count
				min = now.Tree
			}
			now = now.Parent
		}
	}
	return min
}
