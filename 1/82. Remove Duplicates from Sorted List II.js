/* Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

Return the linked list sorted as well.

Example 1:

Input: 1->2->3->3->4->4->5
Output: 1->2->5
Example 2:

Input: 1->1->1->2->3
Output: 2->3 
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Runtime: 136 ms, faster than 6.05% of JavaScript online submissions for Remove Duplicates from Sorted List II.
 * Memory Usage: 38.6 MB, less than 7.69% of JavaScript online submissions for Remove Duplicates from Sorted List II.
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let store = new Set()
    let dup = new Set()

    let now = head

    while(now){
        if(store.has(now.val)){
            dup.add(now.val)
        } else {
            store.add(now.val)
        }
        now = now.next
    }

    const start = new ListNode()
    start.next = head
    let prev = start
     now = head
    while(now){
        if(dup.has(now.val)){
            prev.next = now.next
        } else {
            prev = now
        }
        now = now.next
    }
    return start.next
};