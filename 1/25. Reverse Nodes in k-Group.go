package main

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

// func reverseKGroup(head *ListNode, k int) *ListNode {
// 	list := make([]*ListNode, 0, k)
// 	prev := &ListNode{
// 		Next: head,
// 	}
// 	r := prev
// 	cur := head
// 	i := 0
// 	for cur != nil {
// 		list = append(list, cur)
// 		cur = cur.Next
// 		i++
// 		if i == k || cur == nil {
// 			for len(list) > 0 {
// 				prev.Next = list[len(list)-1]
// 				prev = prev.Next
// 				list = list[:len(list)-1]
// 			}
// 			i = 0
// 		}
// 	}
// 	return r.Next
// }

func getLen(head *ListNode) int {
	if head == nil {
		return 0
	}
	l := 0
	for head != nil {
		head = head.Next
		l++
	}
	return l
}

// Beats 68.72%of users with Go
// Beats 78.33%of users with Go
func reverseKGroup(head *ListNode, k int) *ListNode {
	listLen := getLen(head)
	lead := &ListNode{Next: head}
	prev := lead
	for listLen >= k {
		var now, next *ListNode
		now = prev.Next
		next = now.Next
		for i := 1; i < k; i++ {
			cache := next.Next
			next.Next = now
			now = next
			next = cache
		}
		cache := prev.Next
		prev.Next.Next = next
		prev.Next = now
		prev = cache
		listLen -= k
	}
	return lead.Next
}

// func reverseKGroup(head *ListNode, k int) *ListNode {
// 	list := make([]*ListNode, 0, k)
// 	prev := &ListNode{
// 		Next: head,
// 	}

// 	chead := head
// 	cTail := head
// 	cur := head
// 	i := 0
//     for cur.Next != nil {
// 		next := cur.Next.Next
// 		cur.Next = cur
// 		cur =  next

// 	}
// }
