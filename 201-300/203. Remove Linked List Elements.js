/*
Remove all elements from a linked list of integers that have value val.

    Example:

Input:  1,2,6,3,4,5,6, val = 6
Output: 1,2,3,4,5
*/


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Runtime: 72 ms, faster than 73.86% of JavaScript online submissions for Remove Linked List Elements.
 * Memory Usage: 37.2 MB, less than 31.25% of JavaScript online submissions for Remove Linked List Elements.
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    if(head == null) return head;
    let prev = {
        val: null,
        next: head,
    };
    let store = prev;
    let now = prev.next;

    while(now !== null){
        if(now.val === val){
            if(now.next === null){
                prev.next = null;
                return store.next;
            } else {
                prev.next = now.next;
                now = prev.next;
            }
        } else {
            prev = now;
            now = now.next;
        }
    }
    return store.next;
};


const assert = require('assert');
var test = [
    [[1, 2, 6, 3, 4, 5, 6], true],
];


test.forEach(([A, r], index) => {
    try {
        function ListNode(val) {
            this.val = val;
            this.next = null;
        }
        let root;
        let a;
        while(A.length > 0){
            let e = A.shift();
            if(a == undefined){
                a = new ListNode(e);
                root = a;
            } else {
                a.next = new ListNode(e);
                a = a.next;
            }
        }


        assert.deepEqual(removeElements(root), r)
    } catch (e) {
        console.log(`${index} occur error`);
        console.log(e)
        throw e;
    }
});