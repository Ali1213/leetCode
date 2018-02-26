// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.


// beat 100% 自从LeetCode开始改版后，好像每次都是100%

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var getMin = (eles,depth) => {
  let ele,underEles=[];
  while(eles.length>0){
      ele = eles.pop();
      
      if(ele.left === null && ele.right === null){
          return depth;
      }
      
      if(ele.left !== null) {
          underEles.push(ele.left)
      }
      if(ele.right !== null){
          underEles.push(ele.right)
      }
  }
  
  return underEles.length > 0 ? getMin(underEles, depth+1) : depth;
}

var minDepth = function(root) {
  if(root === null) return 0;
  return getMin([root],1)    
};