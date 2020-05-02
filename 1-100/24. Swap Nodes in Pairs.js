/*
Given a linked list, swap every two adjacent nodes and return its head.

You may not modify the values in the list's nodes, only nodes itself may be changed.


Example:

Given 1->2->3->4, you should return the list as 2->1->4->3.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/**
 * Runtime: 48 ms, faster than 92.32% of JavaScript online submissions for Swap Nodes in Pairs.
 * Memory Usage: 33.8 MB, less than 84.21% of JavaScript online submissions for Swap Nodes in Pairs.
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = (head) => {
    const prox = new ListNode(0, head)
    let prev = prox
    while (prev.next != null && prev.next.next != null) {
        const first = prev.next
        const second = first.next
        const { next } = second
        prev.next = second
        first.next = next
        prev.next.next = first
        prev = prev.next.next
    }
    return prox.next
}
