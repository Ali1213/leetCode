package main

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
//  Runtime
// 17 ms
// Beats
// 10.44%
// Memory
// 8.5 MB
// Beats
// 9.18%
func lowestCommonAncestor2(root, p, q *TreeNode) *TreeNode {
	var dfs func(root *TreeNode, val int) *TreeNode
	var dfs2 func(root *TreeNode, val int)
	parentMap := make(map[int]bool, 0)
	parents := make([]*TreeNode, 0)
	dfs = func(root *TreeNode, val int) *TreeNode {
		if root == nil {
			return nil
		}
		parentMap[root.Val] = true
		if root.Val == val {
			return root
		}
		left := dfs(root.Left, val)
		if left != nil {
			return left
		}
		right := dfs(root.Right, val)
		if right != nil {
			return right
		}
		parentMap[root.Val] = false

		return nil
	}

	dfs2 = func(root *TreeNode, val int) {
		if root == nil {
			return
		}
		parents = append(parents, root)
		if root.Val == val {
			return
		}
		dfs2(root.Left, val)
		dfs2(root.Right, val)
		if parents[len(parents)-1].Val != val {
			parents = parents[0 : len(parents)-1]
		}
		return
	}
	dfs(root, p.Val)
	dfs2(root, q.Val)
	// fmt.Println(parentMap)
	for i := len(parents) - 1; i >= 0; i-- {
		// fmt.Println(parents[i].Val)
		if parentMap[parents[i].Val] {
			return parents[i]
		}
	}
	return root
}

//  Runtime
//  12 ms
//  Beats
//  44.62%
//  Memory
//  7.2 MB
//  Beats
//  84.18%
func lowestCommonAncestor(root, p, q *TreeNode) *TreeNode {
	if root == nil || root == p || root == q {
		return root
	}
	left := lowestCommonAncestor(root.Left, p, q)
	right := lowestCommonAncestor(root.Right, p, q)
	if left == nil {
		return right
	}
	if right == nil {
		return left
	}
	return root
}
