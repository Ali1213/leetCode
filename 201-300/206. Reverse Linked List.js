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
var reverseList = function (head) {

    if(head == null) return head;

    let now = head;
    let newList = null;
    let temp = null;
    while(now.next !== null){
        temp = now;
        now = now.next;
        temp.next = newList;
        newList = temp;
    }
    now.next = newList;
    return now;
};

const assert = require('assert');
var test = [
    [[1, 2, 3, 4, 5], [5, 4, 3, 2, 1]],
];


const convertArrayToListNode = (A) => {

    function ListNode(val) {
        this.val = val;
        this.next = null;
    }

    let root;
    let a;
    while (A.length > 0) {
        let e = A.shift();
        if (a == undefined) {
            a = new ListNode(e);
            root = a;
        } else {
            a.next = new ListNode(e);
            a = a.next;
        }
    }
    return root;
}

test.forEach(([A, r], index) => {
    try {
        assert.deepEqual(reverseList(convertArrayToListNode(A)), convertArrayToListNode(r))
    } catch (e) {
        console.log(`${index} occur error`);
        console.log(e)
        throw e;
    }
});
