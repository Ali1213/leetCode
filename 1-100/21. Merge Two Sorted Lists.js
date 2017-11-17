/* Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists. */


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// beats 71.78%
var mergeTwoLists = function (l1, l2) {
  if (typeof l1 !== 'object') {
    return l2;
  }
  if (typeof l2 !== 'object') {
    return l1;
  }

  let r = new ListNode();

  return merge(l1, l2, r);

  function merge(l1, l2, data) {

    if (!l1) {
      return l2;
    }

    if (!l2) {
      return l1;
    }

    data.next = new ListNode();

    if (l1.val > l2.val) {
      data.val = l2.val;
      data.next = merge(l1, l2.next, data.next);
    } else {
      data.val = l1.val;
      data.next = merge(l1.next, l2, data.next);
    }

    return data;
  }
};


// beats 71.78%
var mergeTwoLists = function (l1, l2) {
  if (typeof l1 !== 'object') {
    return l2;
  }
  if (typeof l2 !== 'object') {
    return l1;
  }
  let arr = []

  while(l1 && l2){
    if(l1.val>l2.val){
      arr.push(new ListNode(l2.val));
      l2 = l2.next;
    }else{
      arr.push(new ListNode(l1.val));
      l1 = l1.next;
    }
  }


  if(l1){
    arr.push(l1);
  }

  if(l2){
    arr.push(l2);
  }

  let len = arr.length;
  for(let i = 1 ;i<len;i++){
    arr[i-1].next = arr[i];
  }

  return arr[0] || null;
};

// beats 76.76%
var mergeTwoLists = function (l1, l2) {
  if (typeof l1 !== 'object') {
    return l2;
  }
  if (typeof l2 !== 'object') {
    return l1;
  }
  let base = new ListNode();
  let point = base;

  while(l1 && l2){
    if(l1.val>l2.val){
      point.next = new ListNode(l2.val);
      point = point.next;
      l2 = l2.next;
    }else{
      point.next = new ListNode(l1.val);
      point = point.next;
      l1 = l1.next;
    }
  }


  if(l1){
    point.next = l1;
  }

  if(l2){
    point.next = l2;
  }

  return base.next;
};

// beats 81.11%
var mergeTwoLists = function (l1, l2) {
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }
  let base = new ListNode();
  let point = base;

  while(l1 && l2){
    if(l1.val>l2.val){
      point.next = new ListNode(l2.val);
      point = point.next;
      l2 = l2.next;
    }else{
      point.next = new ListNode(l1.val);
      point = point.next;
      l1 = l1.next;
    }
  }


  point.next = l1 ? l1 : l2;

  return base.next;
};