package main
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * type NestedInteger struct {
 * }
 *
 * // Return true if this NestedInteger holds a single integer, rather than a nested list.
 * func (this NestedInteger) IsInteger() bool {}
 *
 * // Return the single integer that this NestedInteger holds, if it holds a single integer
 * // The result is undefined if this NestedInteger holds a nested list
 * // So before calling this method, you should have a check
 * func (this NestedInteger) GetInteger() int {}
 *
 * // Set this NestedInteger to hold a single integer.
 * func (n *NestedInteger) SetInteger(value int) {}
 *
 * // Set this NestedInteger to hold a nested list and adds a nested integer to it.
 * func (this *NestedInteger) Add(elem NestedInteger) {}
 *
 * // Return the nested list that this NestedInteger holds, if it holds a nested list
 * // The list length is zero if this NestedInteger holds a single integer
 * // You can access NestedInteger's List element directly if you want to modify it
 * func (this NestedInteger) GetList() []*NestedInteger {}
 */

//  Runtime
// 17 ms
// Beats
// 5.62%
// Memory
// 7.9 MB
// Beats
// 6.74%
type NestedIterator struct {
    Ints []int
	Cur int
}

func Constructor(nestedList []*NestedInteger) *NestedIterator {
	queue := nestedList[:]
	ints := make([]int, 0)
	for len(queue) > 0 {
		cur := queue[0]
		queue = queue[1:]
		if cur.IsInteger() {
			ints = append(ints, cur.GetInteger())
		}
		list := cur.GetList()
		queue = append(list, queue...)
	}
	
    return &NestedIterator{
        Ints: ints,
    }
}

func (this *NestedIterator) Next() int {
	this.Cur +=1
    return this.Ints[this.Cur-1]
}

func (this *NestedIterator) HasNext() bool {
    return len(this.Ints) != this.Cur
}