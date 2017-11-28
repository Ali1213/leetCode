// Given an array and a value, remove all instances of that value in-place and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// The order of elements can be changed. It doesn't matter what you leave beyond the new length.


//beat 84.16%
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let n = 0;
  for(let i = 0; i<nums.length; i++){
      if(nums[i] === val){
          [nums[i],nums[n]] = [nums[n],nums[i]];
          n++;
      }
  }
  if(n){
      nums.splice(0,n);
  }
  return nums.length;
};