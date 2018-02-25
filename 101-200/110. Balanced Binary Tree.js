// Given a binary tree, determine if it is height-balanced.

// For this problem, a height-balanced binary tree is defined as:

// a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

// Example 1:

// Given the following tree [3,9,20,null,null,15,7]:

//     3
//    / \
//   9  20
//     /  \
//    15   7
// Return true.

// Example 2:

// Given the following tree [1,2,2,3,3,null,null,4,4]:

//        1
//       / \
//      2   2
//     / \
//    3   3
//   / \
//  4   4
// Return false.

// error 广度搜索方法
// 错误例子：[1,2,2,3,3,3,3,4,4,4,4,4,4,null,null,5,5]
var aaa = function(list, isShort){
  if(isShort>1 && list.length>0) return false;
  let a;
  let newList = [];
  if(isShort===1){
      ++isShort;
  }
  do{
      a = list.pop();
      if(a.left !== null) newList.push(a.left);
      if(a.right !== null) newList.push(a.right);
      if( (a.right === null || a.left === null) && isShort === 0 ){
          isShort = 1;
      }
  }while(list.length > 0);
  return newList.length>0 ? aaa(newList,isShort): true;
}

var isBalanced = function(root) {
  if(root === null) return true;
  return aaa([root],0);
};


// beat 100%
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var balance = function(root,depth){
  if(root===null) return [true, depth-1];
  let a = balance(root.left,depth + 1);
  if(!a[0]) return a;
  let b = balance(root.right,depth+ 1);
  if(!b[0]) return b;
  let d,e;
  if( a[1] > b[1]){
      d = a[1];
      e = d - b[1];
  }else {
      d = b[1];
      e = d - a[1];
      
  }
  return  e>1 ? [false] : [true,d];
}

var isBalanced = function(root) {
  return balance(root,0)[0];
};