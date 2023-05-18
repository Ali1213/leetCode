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
// 4 ms
// Beats
// 89.66%
// Memory
// 6.4 MB
// Beats
// 68.97%
func findFrequentTreeSum(root *TreeNode) []int {
	store := make(map[int]int, 0)
	travelTree(root, &store)
	max := 0
	for _, v := range store {
		if v > max {
			max = v
		}
	}
	result := make([]int, 0)
	for i, v := range store {
		if v == max {
			result = append(result, i)
		}
	}
	return result
}


func travelTree(root *TreeNode, store *map[int]int) int {
	if root == nil {
		return 0
	}
	left := travelTree(root.Left, store)
	right := travelTree(root.Right, store)
	sum := left + right + root.Val
	(*store)[sum]= (*store)[sum] + 1
	return sum
}
