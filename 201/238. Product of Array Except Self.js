
// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:

// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Note: Please solve it without division and in O(n).

// Follow up:
// Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

// beat 58.39%
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    if(!nums||nums.length === 0) return nums;
     let len = nums.length;
     let output = new Array(len);
     output[0] = 1
     for(let i = 1; i< len; i++){
         output[i] = output[i-1] * nums[i-1];
     }
     let right = 1;
     for(let i = len-1; i>= 0; i--){
         output[i] *= right;
         right *= nums[i];
     }
     return output;
     
 };