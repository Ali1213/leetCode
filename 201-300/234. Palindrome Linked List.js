/*
Given a singly linked list, determine if it is a palindrome.

    Example 1:

Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true
Follow up:
    Could you do it in O(n) time and O(1) space?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Runtime: 84 ms, faster than 14.37% of JavaScript online submissions for Palindrome Linked List.
 * Memory Usage: 39.4 MB, less than 86.67% of JavaScript online submissions for Palindrome Linked List.
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(head === null || head.next === null) return true

    let slow = head;
    let fast = head;

    while(fast && fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    fast = slow.next;

    slow.next = null;

    let right = null;

    while(fast){
        let tmp = fast;
        fast = fast.next;
        tmp.next = right;
        right = tmp;
    }

    while(true){
        if(head.val !== right.val)return false

        if(head.next === null || right.next === null) return true;

        head = head.next;
        right = right.next
    }

};




const assert = require('assert');
var test = [
    [1, true],
    [16, true],
    [218, false],
    [1073741825, false],
];


test.forEach(([A, r], index) => {
    try {

        assert.deepEqual(isPalindrome(A), r)
    } catch (e) {
        console.log(`${index} occur error`);
        console.log(e)
        throw e;
    }
});
