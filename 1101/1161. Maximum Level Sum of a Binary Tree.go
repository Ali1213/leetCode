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
//  Runtime
//  113 ms
//  Beats
//  56.52%
//  Memory
//  8.5 MB
//  Beats
//  17.39%
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func maxLevelSum(root *TreeNode) int {
    if root == nil {
        return 0
    }
	queue := make([]*TreeNode, 0)
	queue = append(queue, root)
	max := math.MinInt
	minLevel := 0
	level := 0
	for len(queue) > 0 {
		nowLevel := queue[:]
		queue = make([]*TreeNode, 0)
		level++;
		sum := 0
		for len(nowLevel) > 0 {
			cur := nowLevel[0]
			sum += cur.Val
			// nowLevel := make([]*TreeNode, 0)
			if cur.Left != nil {
				queue = append(queue, cur.Left)
			}
			if cur.Right != nil {
				queue = append(queue, cur.Right)
			}
            nowLevel = nowLevel[1:]
		}
		if sum > max {
			minLevel = level
			max = sum
		}
	}
	return minLevel
}