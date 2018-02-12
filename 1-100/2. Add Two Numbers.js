/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

    You may assume the two numbers do not contain any leading zero, except the number 0 itself.

    Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8

*/

// beat 89.02%
var addTwoNumbers = function(l1, l2) {
    if(l1 === null || l2 === null) return l1 || l2;
    let surplus = 0;
    let newList;
    let nowNew; 
    while(l1 && l2){
        let all = l1.val + l2.val + surplus;
        let now = all%10;
        surplus = all/10 >> 0;
        l1 = l1.next;
        l2 = l2.next;
        if(!newList) {
            newList = new  ListNode(now);
            nowNew = newList;
        }else{
            nowNew.next = new ListNode(now);
            nowNew = nowNew.next;
        }
    }
    l1 = l1 || l2;
    while(l1){
        let all = l1.val + surplus;
        let now = all%10;
        surplus = all/10 >> 0;
        l1 = l1.next;
        nowNew.next = new ListNode(now);
        nowNew = nowNew.next;
    }
    if(surplus) nowNew.next = new ListNode(surplus);
    return newList;
};