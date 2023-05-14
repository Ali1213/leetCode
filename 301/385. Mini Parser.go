package main

import "strconv"

 type NestedInteger struct {
	 }
	
	 // Return true if this NestedInteger holds a single integer, rather than a nested list.
	 func (n NestedInteger) IsInteger() bool {
		return true
	 }
	
	 // Return the single integer that this NestedInteger holds, if it holds a single integer
	 // The result is undefined if this NestedInteger holds a nested list
	 // So before calling this method, you should have a check
	 func (n NestedInteger) GetInteger() int {
		return 0
	 }
	
	 // Set this NestedInteger to hold a single integer.
	 func (n *NestedInteger) SetInteger(value int) {}

 // Set this NestedInteger to hold a nested list and adds a nested integer to it.
 func (n *NestedInteger) Add(elem NestedInteger) {}

 // Return the nested list that this NestedInteger holds, if it holds a nested list
 // The list length is zero if this NestedInteger holds a single integer
 // You can access NestedInteger's List element directly if you want to modify it
 func (n NestedInteger) GetList() []*NestedInteger {}
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * type NestedInteger struct {
 * }
 *
 * // Return true if this NestedInteger holds a single integer, rather than a nested list.
 * func (n NestedInteger) IsInteger() bool {}
 *
 * // Return the single integer that this NestedInteger holds, if it holds a single integer
 * // The result is undefined if this NestedInteger holds a nested list
 * // So before calling this method, you should have a check
 * func (n NestedInteger) GetInteger() int {}
 *
 * // Set this NestedInteger to hold a single integer.
 * func (n *NestedInteger) SetInteger(value int) {}
 *
 * // Set this NestedInteger to hold a nested list and adds a nested integer to it.
 * func (n *NestedInteger) Add(elem NestedInteger) {}
 *
 * // Return the nested list that this NestedInteger holds, if it holds a nested list
 * // The list length is zero if this NestedInteger holds a single integer
 * // You can access NestedInteger's List element directly if you want to modify it
 * func (n NestedInteger) GetList() []*NestedInteger {}
 */

//  Runtime
// 6 ms
// Beats
// 44.44%
// Memory
// 4.7 MB
// Beats
// 66.67%
 func deserialize(s string) *NestedInteger {
	stack := make([]NestedInteger, 0)
	curStr := []byte{}

	var cur *NestedInteger
	i := 0;
    for i < len(s) {
		if s[i] == '[' {
			if cur != nil {
				stack = append(stack, *cur)
				cur = nil
			}
			cur = &NestedInteger{}
		} else if s[i] == ']' {
			if len(curStr) != 0 {
				num,_ := strconv.Atoi(string(curStr))
				v := &NestedInteger{}
				v.SetInteger(num)
				curStr = []byte{}
				cur.Add(*v)
			}

			if len(stack) != 0 {
				last := stack[len(stack) - 1]
				stack = stack[:len(stack) - 1]
				last.Add(*cur)
				cur = &last
			}
			
			// 如果是一个数组结束，加入到之前的队列
			// 如果是整个的结束
		} else if s[i] == ',' {
			num,_ := strconv.Atoi(string(curStr))
			if (s[i-1] != ']') {
				v := &NestedInteger{}
				v.SetInteger(num)                
                cur.Add(*v);
            }
			// 开辟新数据
			curStr = []byte{}
		} else {
			// 连接字符串
			curStr = append(curStr, s[i])
		}
		i += 1
	}

	if len(curStr) > 0 {
		v := NestedInteger{}
		num,_ := strconv.Atoi(string(curStr))
		v.SetInteger(num)
		return &v
	}
	return cur
 }