// Given an integer array, find three numbers whose product is maximum and output the maximum product.

// Example 1:
// Input: [1,2,3]
// Output: 6
// Example 2:
// Input: [1,2,3,4]
// Output: 24
// Note:
// The length of the given array will be in range [3,104] and all elements are in the range [-1000, 1000].
// Multiplication of any three numbers in the input won't exceed the range of 32-bit signed integer.

// beat 100%
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    let max1=Number.MIN_SAFE_INTEGER,max2=Number.MIN_SAFE_INTEGER,max3=Number.MIN_SAFE_INTEGER,min1=Number.MAX_SAFE_INTEGER,min2=Number.MAX_SAFE_INTEGER;
    
    for(let i = 0;i<nums.length;i++){
        let z = nums[i];
        if(z>=max1){
            max3 = max2;
            max2 = max1;
            max1 = z;
        }else if(z>=max2){
            max3 = max2;
            max2 = z;
        }else if (z>=max3){
            max3 = z;
        }
        if(z<= min1){
            min2 = min1;
            min1 = z;
        }else if (z<=min2){
            min2 = z
        }
    }
    return Math.max(max1*max2*max3, max1*min1*min2)
};

// beat 60.23%
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums = nums.sort((a,b)=>a-b);
    
    return Math.max(nums[0]*nums[1]*nums[nums.length-1],nums[nums.length-1]*nums[nums.length-2]*nums[nums.length-3])
};