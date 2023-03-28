/*
Reverse a linked list from position m to n. Do it in one-pass.

Note: 1 ≤ m ≤ n ≤ length of list.

Example:

Input: 1->2->3->4->5->NULL, m = 2, n = 4
Output: 1->4->3->2->5->NULL
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Runtime: 72 ms, faster than 69.11% of JavaScript online submissions for Reverse Linked List II.
 * Memory Usage: 36.9 MB, less than 18.82% of JavaScript online submissions for Reverse Linked List II.
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
    let first = new ListNode(0, head)
    let prev = first
    let now = prev.next
    let i = 1
    while (now) {
        if (i>= m && i <= n - 1) {
            let tmp = prev.next
            let final = now.next.next
            prev.next = now.next
            prev.next.next = tmp
            now.next = final
            
        } else {
            prev = now
            now = now.next
        }
        i += 1
    }
    return first.next
};