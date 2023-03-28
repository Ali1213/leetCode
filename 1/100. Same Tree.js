// Given two binary trees, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical and the nodes have the same value.


// Example 1:

// Input:     1         1
//           / \       / \
//          2   3     2   3

//         [1,2,3],   [1,2,3]

// Output: true
// Example 2:

// Input:     1         1
//           /           \
//          2             2

//         [1,2],     [1,null,2]

// Output: false
// Example 3:

// Input:     1         1
//           / \       / \
//          2   1     1   2

//         [1,2,1],   [1,1,2]

// Output: false


// beat 63.64%
var isSameTree = function(p, q) {
    
  if(p===null || q ===null){
      if(p === q){
          return true;
      }else{
          return false;
      }
  }
  if(p.val !== q.val) return false;
  
  return isSameTree(p.left,q.left) && isSameTree(p.right,q.right);
};


// beat 74.54%
var isSameTree = function(p, q) {
    
  if(p===null || q ===null){
      if(p === q){
          return true;
      }else{
          return false;
      }
  }
  
  let a = isSameTree(p.left,q.left) && isSameTree(p.right,q.right);
  
  if(a === false){
      return false;
  }
  
  if(p.val !== q.val) return false;
  return true;
};

// 66.82% 要哭了。。。。。
var isSameTree = function(p, q) {
    
  if(p===null || q ===null){
      return p === q;
  }
  
  if( !(isSameTree(p.left,q.left) && isSameTree(p.right,q.right)) ){
      return false;
  }
  
  return p.val === q.val;
};

// 1.82% 
// 46.82%  两次提交显示的结果不一样。。。。。。
// 说明这个时间上的测试真的是很随意
var isSameTree = function(p, q) {
    
  if(p===null || q ===null){
      return p === q;
  }
  
  if( isSameTree(p.left,q.left) && isSameTree(p.right,q.right) ){
      return p.val === q.val;
  }
  return false
  
};