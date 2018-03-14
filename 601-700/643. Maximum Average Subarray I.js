// Given an array consisting of n integers, find the contiguous subarray of given length k that has the maximum average value. And you need to output the maximum average value.

// Example 1:
// Input: [1,12,-5,-6,50,3], k = 4
// Output: 12.75
// Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75
// Note:
// 1 <= k <= n <= 30,000.
// Elements of the given array will be in the range [-10,000, 10,000].

// beat 97.50%
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let max = 0;
    let i = 0;
    while(i<k){
        max += nums[i];
        ++i;
    }
    let now = max;
    
    for( ;i< nums.length;i++){
        now = now + nums[i] - nums[i-k];
        if(now>max) max = now;
    }
    return max/k;
};




// beat 97.50%
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let max = 0;
    let res = Number.MIN_SAFE_INTEGER;
    for( let i = 0;i< nums.length;i++){
        if(i<k) {
            max+=nums[i];
        }else{
            res = Math.max(res,max);
            max += nums[i] - nums[i-k];
        }
        
    }
    return Math.max(res,max)/k;
};