/* Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

Example:

Input: head = 1->4->3->2->5->2, x = 3
Output: 1->2->2->4->3->5 */


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Runtime: 84 ms, faster than 43.49% of JavaScript online submissions for Partition List.
 * Memory Usage: 38.5 MB, less than 5.88% of JavaScript online submissions for Partition List.
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let lsHead = new ListNode(null, head)
    let lsNow = lsHead
    let gtHead = new ListNode(null)
    let gtNow = gtHead
    let now = head
    while(now){
        if(now.val >= x){
            gtNow.next = now
            gtNow = gtNow.next
        } else {
            lsNow.next = now
            lsNow = lsNow.next
        }
        now = now.next
    }
    let rtn = lsHead.next
    lsNow.next = gtHead.next
    gtNow.next =  null
    return rtn
};