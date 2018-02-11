// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
// But the following [1,2,2,null,3,null,3] is not:
//     1
//    / \
//   2   2
//    \   \
//    3    3
// Note:
// Bonus points if you could solve it both recursively and iteratively.



//beat 80.54%
const isSame = function(left,right){
  if(left === null || right === null){
      return left === right;
  }
  let a = isSame(left.right,right.left) && isSame(left.left,right.right);
  if(a === false){
      return a;
  }
  return left.val === right.val;
}

var isSymmetric = function(root) {
  if(!root) return true;
  return isSame(root.left,root.right);
};