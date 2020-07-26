/*
Given a linked list, rotate the list to the right by k places, where k is non-negative.

Example 1:

Input: 1->2->3->4->5->NULL, k = 2
Output: 4->5->1->2->3->NULL
Explanation:
rotate 1 steps to the right: 5->1->2->3->4->NULL
rotate 2 steps to the right: 4->5->1->2->3->NULL
Example 2:

Input: 0->1->2->NULL, k = 4
Output: 2->0->1->NULL
Explanation:
rotate 1 steps to the right: 2->0->1->NULL
rotate 2 steps to the right: 1->2->0->NULL
rotate 3 steps to the right: 0->1->2->NULL
rotate 4 steps to the right: 2->0->1->NULL 
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Runtime: 88 ms, faster than 55.88% of JavaScript online submissions for Rotate List.
 * Memory Usage: 38.6 MB, less than 5.66% of JavaScript online submissions for Rotate List.
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    // let v = []
    if (head == null) return head
    let current = head
    let len = 0
    while (current != null) {
        // const before = now
        // v.push(now)
        current = current.next
        len += 1
    }
    if (len < 2 || k % len === 0) return head

    k %= len

    let diff = len - k -1
    let now = head
    while (diff > 0) {
        now = now.next
        diff -= 1
    }

    let last = head
    while (last.next != null) last = last.next;
    last.next = head

    const bef = now.next
    now.next = null

    return bef;
};