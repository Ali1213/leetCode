// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// Your algorithm's runtime complexity must be in the order of O(log n).

// If the target is not found in the array, return [-1, -1].

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// beat 98.73%
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let start = 0, end = nums.length-1;
    let result = [-1,-1]
    while(start<=end){
        let pos = (start + end)/2 >> 0;
        if(nums[pos]>target){
            end = pos-1;
        }else if (nums[pos]<target){
            start = pos+1
        }else {
            start = pos-1
            while(nums[start] === target){
                start--;
            }
            result[0] = start + 1;
            
            end = pos+1
            while(nums[end] === target){
                end++;
            }
            result[1] = end - 1;
            return result
        }
        
    }
    return result
};