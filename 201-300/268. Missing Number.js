// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

// Example 1

// Input: [3,0,1]
// Output: 2
// Example 2

// Input: [9,6,4,2,3,5,7,0,1]
// Output: 8

// Note:
// Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?

// Credits:
// Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.

// beat 42.33%
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  if(!Array.isArray(nums) || nums.length === 0) return 0;
  let temp = 0;
  for(let i=0;i<nums.length;i++){
      temp += i - nums[i];
  }
  return temp + nums.length;
};


// beat 100%
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  if(!Array.isArray(nums) || nums.length === 0) return 0;
  let temp = 0;
  for(let i=0;i<nums.length;i++){
      temp = temp ^ i ^ nums[i];
  }
  return temp ^ nums.length;
};