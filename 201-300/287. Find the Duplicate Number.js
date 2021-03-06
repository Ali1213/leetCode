// Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

// Example 1:

// Input: [1,3,4,2,2]
// Output: 2
// Example 2:

// Input: [3,1,3,4,2]
// Output: 3
// Note:

// You must not modify the array (assume the array is read only).
// You must use only constant, O(1) extra space.
// Your runtime complexity should be less than O(n2).
// There is only one duplicate number in the array, but it could be repeated more than once.


// beat 11.04%
// 复杂度是O（n2）
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    if(nums.length === 0) return -1
    let n = nums.length
    for(let i = 0; i< n; i++){
        for(let j = i+1; j< n; j++){
            if(nums[i] === nums[j]) return nums[i]
        }
    }
    return -1
};

// beat 99.35%
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    if(nums.length < 2) return -1
    let fast = nums[0], slow = nums[0]
    while( true ){
        slow = nums[slow]
        fast = nums[nums[fast]]
        
        if(fast == slow) break
    }
    
    let pre = nums[0]
    
    while( pre !== fast){
        pre = nums[pre]
        fast = nums[fast]
    }
    return pre
};