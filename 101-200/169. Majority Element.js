// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Credits:
// Special thanks to @ts for adding this problem and creating all test cases.


// 复杂度O(n) 空间O(1)
// beat 92.75%
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  if(nums.length<2) return nums[0]||0;
  let major = nums[0];
  let count = 1
  for(let i=1;i<nums.length;i++){
      if(count === 0){
          major = nums[i];
          count = 1;
      }else if(major === nums[i]){
          ++count;
      }else{
          --count;
      }
  }
  return major;
};


// 考虑到题目设定的条件
// beat 100%
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let major = nums[0];
  let count = 1
  for(let i=1;i<nums.length;i++){
      if(count === 0){
          major = nums[i];
          count = 1;
      }else if(major === nums[i]){
          ++count;
      }else{
          --count;
      }
  }
  return major||0;
};