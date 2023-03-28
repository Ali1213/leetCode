/*
Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:

Given n will always be valid.

Follow up:

Could you do this in one pass?
*/


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

const removeNthFromEnd = (head, n) => {
    const dummy = new ListNode(0)
    dummy.next = head
    let first = dummy
    let second = dummy
    let i = 0
    while (i < n + 1 && first !== null) {
        first = first.next
        i++
    }

    while (first != null) {
        second = second.next
        first = first.next
    }

    second.next = second.next.next
    return dummy.next
}
