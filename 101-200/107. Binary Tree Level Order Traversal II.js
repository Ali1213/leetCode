// Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its bottom-up level order traversal as:
// [
//   [15,7],
//   [9,20],
//   [3]
// ]

// beat 54.37%
var returnArr = (root,depth,arr) => {
  if(root === null) return root;
  returnArr(root.left,depth+1,arr)
  returnArr(root.right,depth+1,arr)
  if(arr[depth]){
      arr[depth].push(root.val);
  }else{
      arr[depth] = [root.val];
  }
  return arr;
}

var levelOrderBottom = function(root,arr=[]) {
  if(root === null)return arr;
  returnArr(root,0,arr);
  let len = arr.length;
  for(let i=0;i<len/2;i++){
      [arr[i],arr[len-1-i]] = [arr[len-1-i],arr[i]];
  }
  return arr;
};

// beat 60.19%
var returnArr = (root,depth,arr) => {
  if(root === null) return root;
  returnArr(root.left,depth+1,arr)
  returnArr(root.right,depth+1,arr)
  arr[depth] = arr[depth] || [];
  arr[depth].push(root.val);
  return arr;
}

var levelOrderBottom = function(root,arr=[]) {
  if(root === null)return arr;
  return returnArr(root,0,arr).reverse();
};


//beat 45.63%
var levelOrderBottom = function(root,depth=0,arr=[]) {
  if(root === null)return arr;
  levelOrderBottom(root.left,depth+1,arr)
  levelOrderBottom(root.right,depth+1,arr)
  arr[depth] = arr[depth] || [];
  arr[depth].push(root.val);
  if(depth === 0){
      return arr.reverse();
  }
};