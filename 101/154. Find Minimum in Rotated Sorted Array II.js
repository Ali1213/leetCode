/* 
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

Find the minimum element.

The array may contain duplicates.

Example 1:

Input: [1,3,5]
Output: 1
Example 2:

Input: [2,2,2,0,1]
Output: 0
Note:

This is a follow up problem to Find Minimum in Rotated Sorted Array.
Would allow duplicates affect the run-time complexity? How and why? 
*/

// beat 88.87%
// 朴素流解法
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let min = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i< nums.length; i++){
        min = Math.min(nums[i], min)
    }
    return min
};


// beat 88.78%

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let start = 0, end = nums.length-1,n = 0;

   while(start < end){
       if(end - start === 1) return Math.min(nums[start], nums[end])
    n = (start + end)/2>>0
    if(nums[n] > nums[end]){
        start = n;     
    }else if (nums[n] === nums[end]) {
        if(nums[n] === nums[start]){
            start += 1;
        }else {
            end = n;
        }
    } else {
        end = n;
    }   

   }
    return nums[n]
}


// beat 88.78%

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if(nums.length > 10){
        let min = Number.MAX_SAFE_INTEGER;
        for(let i = 0; i< nums.length; i++){
            min = Math.min(nums[i], min)
        }
        return min
    } else {
        let start = 0, end = nums.length-1,n = 0;
        
       while(start < end){
           if(end - start === 1) return Math.min(nums[start], nums[end])
        n = (start + end)/2>>0
        if(nums[n] > nums[end]){
            start = n;     
        }else if (nums[n] === nums[end]) {
            if(nums[n] === nums[start]){
                start += 1;
            }else {
                end = n;
            }
        } else {
            end = n;
        }   
        
       }
        return nums[n]
    }
    
    
};