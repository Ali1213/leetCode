// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// beat 80.99%
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if(target < nums[0]){
      return 0;
  }
  if(target > nums[nums.length-1]){
      return nums.length;
  }
  let pos = Math.floor(nums.length/2),
      min = 0,
      max = nums.length;
  
  while(max-min>1){
      
      if(nums[pos] === target){
          return pos;
      }
      
      if(nums[pos] > target){
          max = pos;
          pos = Math.floor((min+max)/2);
      }
      
      if(nums[pos] < target){
          min = pos;
          pos = Math.floor((min+max)/2);
      }
  }
  return nums[pos] >= target ? pos:pos+1;
};