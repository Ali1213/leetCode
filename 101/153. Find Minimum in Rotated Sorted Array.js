// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

// Find the minimum element.

// You may assume no duplicate exists in the array.

// Example:

// Input: [3,4,5,1,2]
// Output: 1

// beat 97.53%
/**
 * @param {number[]} ms
 * @return {number}
 */
var findMin = function(nums) {
    if(nums === null || nums.length === 0) return null
    let len = nums.length-1;
    if(nums[0] <= nums[len]) return nums[0];
    let start = 0; let end = len;
    while(start < end){
        let pos = (start+end)/2 >> 0;
        if(nums[pos] > nums[end]){
            start = pos + 1;
        }else if (nums[pos] < nums[end]){
            end = pos;
        }else{
            end--;
        }
    }
    return nums[start];
};