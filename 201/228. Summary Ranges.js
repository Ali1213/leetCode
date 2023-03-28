
// Given a sorted integer array without duplicates, return the summary of its ranges.

// Example 1:

// Input:  [0,1,2,4,5,7]
// Output: ["0->2","4->5","7"]
// Explanation: 0,1,2 form a continuous range; 4,5 form a continuous range.
// Example 2:

// Input:  [0,2,3,4,6,8,9]
// Output: ["0","2->4","6","8->9"]
// Explanation: 2,3,4 form a continuous range; 8,9 form a continuous range.

// beat 13.21%
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    if (nums == null || nums.length == 0) return nums
    let len = nums.length
    const result = [];
    let sK = 0, sV = nums[0];
    for (let i = 1; i < len; i++) {
        if (nums[i] - sV !== i - sK) {
            result.push(i - sK === 1 ? "" + sV : sV + "->" + nums[i - 1]);
            sK = i;
            sV = nums[i]
        }
    }

    result.push(len - sK === 1 ? "" + sV : sV + "->" + nums[len - 1]);
    return result
};


// beat 100%
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    if (nums == null || nums.length == 0) return nums
    let len = nums.length
    const result = [nums[0]];
    
    for (let i = 1; i < len; i++) {
        if (nums[i] !== nums[i-1]+1) {
            if(nums[i-1]===result[result.length-1]){
                result[result.length-1] += ""
            }else{
                result[result.length-1] += "->" + nums[i - 1]
            }
            result.push(nums[i])
        }
    }

    if(nums[len-1]===result[result.length-1]){
        result[result.length-1] += ""
    }else{
        result[result.length-1] += "->" + nums[len - 1]
    }
    return result
};