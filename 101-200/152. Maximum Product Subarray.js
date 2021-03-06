
// Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

// Example 1:

// Input: [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest sum = 6.
// Example 2:

// Input: [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

// beat 98.05%
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let len = nums.length;
    if( len === 0) return 0;
    let v = 0;
    let max = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i<len;i++){
        if(v === 0) v = nums[i]
        else v *= nums[i]
        max = Math.max(max,v)
    }
    v = 0;
    for(let i = len-1;i>=0;i--){
        if(v === 0) v = nums[i]
        else v *= nums[i]
        max = Math.max(max,v)
    }
    return max
};

// beat 98.05%
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = nums[0];
    let min = nums[0];
    let res = nums[0];
    
    for(let i = 1; i<nums.length;i++){
        let temp = max;
        max = Math.max(nums[i],max*nums[i],min*nums[i]);
        min = Math.min(nums[i],temp*nums[i],min*nums[i]);
        res = Math.max(max,min,res);
    }
    return res || 0;
};