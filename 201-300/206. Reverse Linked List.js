/*
Reverse a singly linked list.

    Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

    A linked list can be reversed either iteratively or recursively. Could you implement both?
*/


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Runtime: 56 ms, faster than 80.41% of JavaScript online submissions for Reverse Linked List.
 * Memory Usage: 35.3 MB, less than 32.61% of JavaScript online submissions for Reverse Linked List.
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList1 = (head) => {
    if (head == null) return head

    let now = head
    let newList = null
    let temp = null
    while (now.next !== null) {
        temp = now
        now = now.next
        temp.next = newList
        newList = temp
    }
    now.next = newList
    return now
}


const reverseList2 = (head) => {
    if (head == null || head.next == null) return head

    let now = head

    let prev = head.next
    let temp = null
    while (prev !== null) {
        now.next = temp
        temp = now
        now = prev
        prev = prev.next
    }
    now.next = temp
    return now
}

// Runtime: 108 ms, faster than 47.62% of JavaScript online submissions for Reverse Linked List.
// Memory Usage: 44.8 MB, less than 8.78% of JavaScript online submissions for Reverse Linked List.
const reverseList = (head) => {
    if (head == null || head.next == null) return head
    const last = reverseList(head.next)
    // eslint-disable-next-line no-param-reassign
    head.next.next = head
    // eslint-disable-next-line no-param-reassign
    head.next = null
    return last
}


const { testListResultList } = require('../test')

const tests = [
    {
        params: [[1, 2, 3, 4, 5]],
        result: [5, 4, 3, 2, 1],
    },
    {
        params: [[1, 2]],
        result: [2, 1],
    },
    {
        params: [[]],
        result: [],
    },
]

testListResultList(tests, reverseList)
testListResultList(tests, reverseList1)
testListResultList(tests, reverseList2)
