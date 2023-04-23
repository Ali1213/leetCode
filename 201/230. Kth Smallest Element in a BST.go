package main

// Runtime
// 4 ms
// Beats
// 95.68%
// Memory
// 6.7 MB
// Beats
// 26.14%
func kthSmallest(root *TreeNode, k int) int {
	var dfs func (root *TreeNode) int 
    dfs = func (root *TreeNode) int {
		if root == nil {
			return -1
		}
		vL := dfs(root.Left)
		if vL != -1 {
			return vL
		}
		k--
		if k == 0 {
			return root.Val
		}
		vR := dfs(root.Right)
		return vR
	}
	return dfs(root)
}