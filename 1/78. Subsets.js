// Given a set of distinct integers, nums, return all possible subsets (the power set).
//
// Note: The solution set must not contain duplicate subsets.
//
//   For example,
//   If nums = [1,2,3], a solution is:
//
//   [
//     [3],
//     [1],
//     [2],
//     [1,2,3],
//     [1,3],
//     [2,3],
//     [1,2],
//     []
//   ]



// beat 97.49%

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let temp = [[]];
  for(let i = 0;i<nums.length;i++){
    let len = temp.length;
    for(let j=0;j<len;j++){
      let n = temp[j].slice();
      n.push(nums[i]);
      temp.push(n);
    }
  }
  return temp;
};