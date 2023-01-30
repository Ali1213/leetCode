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

type Node struct {
	TreeNode *TreeNode
	ParentVal int
	GrantParentVal int
}

func sumEvenGrandparent(root *TreeNode) int {
	if root == nil {
		return 0
	}
	queue := make([]*Node, 0)
	queue = append(queue, &Node{
		TreeNode: root,
	})
	sum := 0
	for ;len(queue) > 0; {
		cur := queue[0]
		if cur.GrantParentVal > 0 && cur.GrantParentVal % 2 == 0 {
			sum += cur.TreeNode.Val
		}
		if cur.TreeNode.Left != nil {
			queue = append(queue, &Node{
				TreeNode: cur.TreeNode.Left,
				ParentVal: cur.TreeNode.Val,
				GrantParentVal: cur.ParentVal,
			})
		}
		if cur.TreeNode.Right != nil {
			queue = append(queue, &Node{
				TreeNode: cur.TreeNode.Right,
				ParentVal: cur.TreeNode.Val,
				GrantParentVal: cur.ParentVal,
			})
		}
		queue = queue[1:]
	}

	return sum
}
