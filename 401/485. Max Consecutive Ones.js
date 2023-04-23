// Given a binary array, find the maximum number of consecutive 1s in this array.

// Example 1:
// Input: [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.
//     The maximum number of consecutive 1s is 3.
// Note:

// The input array will only contain 0 and 1.
// The length of input array is a positive integer and will not exceed 10,000


//beat 100%
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let now = 0,max =0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] === 0){
            max = max > now ? max : now;
            now = 0;
        }else {
            ++now;
        }
    }
    return max > now ? max : now;
};