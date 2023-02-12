
// Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

// If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

// The replacement must be in-place and use only constant extra memory.

// Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

// 1,2,3 → 1,3,2
// 3,2,1 → 1,2,3
// 1,1,5 → 1,5,1


// beat 95.61%


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if(nums.length < 2) return;
    let n = nums.length;
    let j = n-2;
    while(j>=0 && nums[j+1]<=nums[j]) j--;
    if(j<0) {
        nums.reverse();
        return;
    }
    let i = n-1;
    while(i>j && nums[i]<=nums[j])i--;
    [nums[i],nums[j]] = [nums[j],nums[i]];
    
    j++;
    n--;
    let mid = (j+n)/2;
    while(j<=mid){
        [nums[j],nums[n]] = [nums[n],nums[j]];
        j++;
        n--;
    }
    
}