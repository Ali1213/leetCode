// Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.

// beat 100%
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  let a = new Set();
  for(let i = 0;i<nums.length;i++){
      if(a.has(nums[i])){
          return true;
      }
      a.add(nums[i]);
      if(i>=k){
          a.delete(nums[i-k]);
      }
  }
  return false;
};