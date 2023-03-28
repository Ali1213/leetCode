// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// For example:
// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its depth = 3.

//beat 30.11%

var lens = function(root, depth){
  if(root === null) return depth;
  let a = lens(root.left, depth+1);
  let b = lens(root.right,depth+1);
  return a>b ? a : b;
}

var maxDepth = function(root) {
  return lens(root,0);
};


//beat 54.83%
var maxDepth = function(root,depth=0) {
  if(root === null) return depth;
  let a = maxDepth(root.left, depth+1);
  let b = maxDepth(root.right,depth+1);
  if(a>b){
      return a;
  }
  return b;
};

//beat 50%

var max = (a,b) => a>b ? a:b;

var maxDepth = function(root) {
    if(root === null) return 0;
    return max(maxDepth(root.left),maxDepth(root.right))+1;
};