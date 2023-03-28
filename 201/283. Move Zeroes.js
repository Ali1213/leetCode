// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

// Note:
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.
// Credits:
// Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.


// beat 99.81%
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  if(!Array.isArray(nums) || nums.length === 1) return ;
  let len = nums.length, now=0, realPos = 0,hasZero;
  while(now<len){
      if(nums[now] === 0){
          hasZero = true;
      }else {
          if(now !== realPos){
              [nums[now],nums[realPos]] = [nums[realPos],nums[now]];
             
          }
          ++realPos;
      }
      ++now;
  }
};


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  if(!Array.isArray(nums) || nums.length === 1) return ;
  let len = nums.length, now=0, realPos = 0;
  while(now<len){
      if(nums[now] !== 0){
          if(now !== realPos){
              [nums[now],nums[realPos]] = [nums[realPos],nums[now]];
          }
          ++realPos;
      }
      ++now;
  }
};