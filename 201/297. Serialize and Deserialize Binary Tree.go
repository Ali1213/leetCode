package main

import (
	"fmt"
	"strconv"
	"strings"
)

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

 type Codec struct {
    
 }
 
 func Constructor2() Codec {
	 return Codec{}
 }

 
 // Serializes a tree to a single string.
//  Runtime
// 16 ms
// Beats
// 41.55%
// Memory
// 7.9 MB
// Beats
// 39.73%
 func (this *Codec) serialize(root *TreeNode) string {
    if root == nil {
        return "null"
    }
    leftStr := this.serialize(root.Left)
    rightStr := this.serialize(root.Right)
    return fmt.Sprintf("%d,%s,%s", root.Val, leftStr, rightStr)
 }
 
 // Deserializes your encoded data to tree.
 func (this *Codec) deserialize(data string) *TreeNode {
	vals := strings.Split(data, ",")
    var buildTree func() *TreeNode
    buildTree = func() *TreeNode {
        if vals[0] == "null" {
            vals = vals[1:]
            return nil
        }
        val, _ := strconv.Atoi(vals[0])
        root := &TreeNode{Val: val}
        vals = vals[1:]
        root.Left = buildTree()
        root.Right = buildTree()
        return root
    }
    return buildTree()
 }
 
 
 /**
  * Your Codec object will be instantiated and called as such:
  * ser := Constructor();
  * deser := Constructor();
  * data := ser.serialize(root);
  * ans := deser.deserialize(data);
  */