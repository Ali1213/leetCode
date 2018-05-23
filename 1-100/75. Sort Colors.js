// Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

// Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

// Note: You are not suppose to use the library's sort function for this problem.

// Example:

// Input: [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Follow up:

// A rather straight forward solution is a two-pass algorithm using counting sort.
// First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.
// Could you come up with a one-pass algorithm using only constant space?

// beat 79.72% but not in place
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    nums.sort((a,b)=>a-b)
};


// beat 8.02%
// 请允许我做一个悲伤的表情
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let z0 = 0, z1 = 0
    for(let i = 0; i<nums.length;i++){
        if(nums[i] == 0){
            z0++
        }else if(nums[i] === 1){
            z1++
        }
    }
    
    for(let i = 0; i<z0; i++){
        if(nums[i] !== 0){
            let n = z0
            for(let j=n;j<nums.length;j++){
                if(nums[j]== 0){
                    n = j+1;
                    [nums[i],nums[j]] = [nums[j],nums[i]]
                    break;
                }
            }
        }
    }    
    
    for(let i = z0; i<z0+z1; i++){
        if(nums[i] !== 1){
            let n = z0+z1
            for(let j=n;j<nums.length;j++){
                if(nums[j]== 1){
                    n = j+1;
                    [nums[i],nums[j]] = [nums[j],nums[i]]
                    break;
                }
            }
        }
    }
    
};

// beat 96.23%
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let seconds = nums.length -1 , zero = 0;
    
    for(let i = 0; i <= seconds; i++){
        while(nums[i] === 2 && i< seconds) {
            [nums[i],nums[seconds]] = [nums[seconds],nums[i]];
            seconds--;
        }
        while(nums[i] === 0 && i>zero){
            [nums[i],nums[zero]] = [nums[zero],nums[i]];
            zero++;
        }
    }
    
};