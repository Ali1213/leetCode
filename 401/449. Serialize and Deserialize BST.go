package main

import (
	"strconv"
	"strings"

	"github.com/RichardKnop/machinery/v1/backends/result"
)

 type TreeNode struct {
    Val int
    Left *TreeNode
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
//  7 ms
//  Beats
//  87.50%
//  Memory
//  6.8 MB
//  Beats
//  65.63%
 type Codec struct {
    
 }
 
 func Constructor() Codec {
	 return Codec{}
 }
 
 
 func (this *Codec) travel(root *TreeNode, result *[]string) {
	 if root == nil {
		 return 
	 }
	 *result = append(*result, strconv.Itoa(root.Val))
	 this.travel(root.Left, result)
	 this.travel(root.Right, result)
 }
 
 // Serializes a tree to a single string.
 func (this *Codec) serialize(root *TreeNode) string {
	 arr := make([]string, 0)
	 this.travel(root, &arr)

	 return strings.Join(arr, ",")
 }

 func (this *Codec) deTravse(values []string) *TreeNode {
	if len(values) == 0 {
		return nil
	}
	val, _ := strconv.Atoi(values[0])
	root := &TreeNode{
		Val: val,
	}
	var i int
	for i = 1; i < len(values); i++ {
		if v, _ := strconv.Atoi(values[i]); v > val {
			break
		}
	}
	root.Left 	= this.deTravse(values[1:i])
	root.Right 	= this.deTravse(values[i:])
	return root
}
 
 // Deserializes your encoded data to tree.
 func (this *Codec) deserialize(data string) *TreeNode {    
	if data == "" {
		return nil
	}

	values := strings.Split(data, ",")
	return this.deTravse(values)
 }

 
 /**
  * Your Codec object will be instantiated and called as such:
  * ser := Constructor()
  * deser := Constructor()
  * tree := ser.serialize(root)
  * ans := deser.deserialize(tree)
  * return ans
  */