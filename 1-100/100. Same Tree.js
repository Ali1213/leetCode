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