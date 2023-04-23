// Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

// Find all the elements of [1, n] inclusive that do not appear in this array.

// Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

// Example:

// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [5,6]

// beat 93.02%
// 这个用了额外的空间
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var a = new Set();let r = [];
    for(let num of nums){
        a.add(num);
    }
    for(let i = 0; i<nums.length;i++){
        if(!a.has(i+1)) r.push(i+1);
    }
    return r;
};


// beat 80.23%
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let len = nums.length;
    let r = [];
    for(let i = 0; i<len;i++){
        let m =   Math.abs(nums[i]) - 1;
        nums[m] = nums[m] > 0 ? -nums[m] : nums[m];
    }
    
    for(let i = 0; i<len;i++){
        if(nums[i]>0){
            r.push(i+1);
        }
    }
    return r;
};


// beat 100%
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let len = nums.length;
    let r = [];
    for(let i = 0; i<len;i++){
        let m = Math.abs(nums[i]) - 1;
        if(nums[m]>0){
            nums[m] = -nums[m];
        }
    }
    
    for(let i = 0; i<len;i++){
        if(nums[i]>0){
            r.push(i+1);
        }
    }
    return r;
};