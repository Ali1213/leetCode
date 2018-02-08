// Given a sorted linked list, delete all duplicates such that each element appear only once.

// For example,
// Given 1->1->2, return 1->2.
// Given 1->1->2->3->3, return 1->2->3.

// beat 35.09%
var deleteDuplicates = function(head) {
  if(!head) return [];
  let now = head;
  let val = now.val;
  while(now.next){
      if(now.next.val === val){
          now.next = now.next.next;
      }else{
          now = now.next;
          val = now.val;
      }
  }
  return head;
};

// beat 56.19%
// 双指针问题
var deleteDuplicates = function(head) {
  if(!head || !head.next) return head;
  let now = head;
  let next = head.next;
  while(next){
      if(now.val === next.val){
          next = next.next;
          now.next = next;
      }else{
          now = next;
          next = next.next;
      }
  }
  return head;
};

//beat 44.76%
//思路： 使用一个变量去控制它
var deleteDuplicates = function(head) {
  if(!head || !head.next) return head;
  let now = head;
  while(now.next){
      if(now.val === now.next.val){
          now.next = now.next.next;
      }else{
          now = now.next;
      }
  }
  return head;
};