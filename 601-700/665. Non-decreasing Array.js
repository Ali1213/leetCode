// Given an array with n integers, your task is to check if it could become non-decreasing by modifying at most 1 element.

// We define an array is non-decreasing if array[i] <= array[i + 1] holds for every i (1 <= i < n).

// Example 1:
// Input: [4,2,3]
// Output: True
// Explanation: You could modify the first 4 to 1 to get a non-decreasing array.
// Example 2:
// Input: [4,2,1]
// Output: False
// Explanation: You can't get a non-decreasing array by modify at most one element.
// Note: The n belongs to [1, 10,000].

// beat 98.59%
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let n = nums.length
    if(n<3) return true;
    let pos;
    for(let i = 1;i<n;i++){
        if( nums[i]< nums[i-1] ){
            if( pos !== undefined ) return false;
            pos = i;
        }
    }
    if(pos === undefined) return true;
    if(pos !== n-1){
        if(nums[pos+1]>= nums[pos-1]) return true;
    }else{
        return true;
    }
    return pos-1 !== 0 ? nums[pos] >= nums[pos-2] : true;
};

// beat 87.32%
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let n = nums.length;
    if(n<3) return true;
    let pos;
    for(let i = 1;i<n;i++){
        if( nums[i]< nums[i-1] ){
            if( pos !== undefined ) return false;
            pos = i;
        }
    }
    if(pos === undefined || pos===1 || pos === n-1) return true;

    return  nums[pos+1]>= nums[pos-1] || nums[pos] >= nums[pos-2];
};


