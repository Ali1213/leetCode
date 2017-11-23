// Given a sorted array, remove the duplicates in-place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Example:

// Given nums = [1,1,2],

// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
// It doesn't matter what you leave beyond the new length.



// beats 31.23%
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if(nums.length<2){
      return nums.length;
  }
  
  let i = 0,j = 1;
  while(j<nums.length){
      if(nums[j] === nums[i]){
          nums.splice(j,1);
      }else{
          j++;
          i++;
      }
      
  }
  return nums.length;
};

// 99.67%
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if(nums.length<2){
      return nums.length;
  }
  
  let i = 1,j = 1,temp = nums[0];
  while(j<nums.length){
      if(nums[j]!== temp){
          temp = nums[j];
          nums[i] = temp;
          i++;
      }
      j++;
  }
  nums.splice(i,j)
  return nums.length;
};