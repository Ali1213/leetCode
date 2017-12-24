/* Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
the contiguous subarray [4,-1,2,1] has the largest sum = 6.

click to show more practice. */

// beat 76.33% 
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if( !Array.isArray(nums) || nums.length === 0){
      return 0;
  }
  
  let max = nums[0], sum = 0;
  
  for( let num of nums){
      sum += num;
      max = Math.max(max,sum);
      sum = Math.max(0,sum);
  }
  return max;
  
};