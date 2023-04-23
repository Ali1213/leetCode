// Given an unsorted array of integers, find the length of longest continuous increasing subsequence (subarray).

// Example 1:
// Input: [1,3,5,4,7]
// Output: 3
// Explanation: The longest continuous increasing subsequence is [1,3,5], its length is 3. 
// Even though [1,3,5,7] is also an increasing subsequence, it's not a continuous one where 5 and 7 are separated by 4. 
// Example 2:
// Input: [2,2,2,2,2]
// Output: 1
// Explanation: The longest continuous increasing subsequence is [2], its length is 1. 
// Note: Length of the array will not exceed 10,000


// beat 87.90%
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let n = nums.length;
    if(n<2) return n;
    let count = 0; let max = 0;
    for(let i = 1;i<n;i++){
        if(nums[i]> nums[i-1]){
            ++count;
        }else{
            if(max<count+1) max = count+1;
            count = 0;
        }
    }
     if(max<count+1) max = count+1;
    return max;
};


// beat 99.19%
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let n = nums.length;
    if(n === 0) return 0;
    let count = 1; let max = 0;
    for(let i = 1;i<n;i++){
        if(nums[i]> nums[i-1]){
            ++count;
        }else{
            if(max<count) max = count;
            count = 1;
        }
    }
    if(max<count) max = count;
    return max;
};



// beat 71.77%
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let count = 1; let max = 0;
    for(let i = 1;i<nums.length;i++){
        if(nums[i]> nums[i-1]){
            max = Math.max(max,++count);
        }else count = 1;
    }
    return max || (nums.length === 0 ? 0: count);
};