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
//  33 ms
//  Beats
//  89.47%
//  Memory
//  7.8 MB
//  Beats
//  15.79%
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}
type FindElements struct {
	M map[int]bool
}

func (f *FindElements) Recover(root *TreeNode, x int) {
	if root == nil {
		return
	}
	root.Val = x
	f.M[x] = true
	f.Recover(root.Left, 2*x+1)
	f.Recover(root.Right, 2*x+2)
}

func (f *FindElements) Find(target int) bool {
	return f.M[target]
}

func Constructor(root *TreeNode) FindElements {
	f := FindElements{
        M: make(map[int]bool),
    }

	f.Recover(root, 0)
	return f
}

/**
 * Your FindElements object will be instantiated and called as such:
 * obj := Constructor(root);
 * param_1 := obj.Find(target);
 */
