
// Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

// For example, given the array [2,3,1,2,4,3] and s = 7,
// the subarray [4,3] has the minimal length under the problem constraint.

// click to show more practice.

// Credits:
// Special thanks to @Freezen for adding this problem and creating all test cases.

// beat 21.38%
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    if(s === 0 || nums.length === 0) return 0;
    let minLen = Number.MAX_SAFE_INTEGER;
    for(let i=0;i<nums.length;i++){
        let v = 0,pos = i,len = 0;
        while(pos < nums.length){
            v += nums[pos];
            len++;
            if(v>= s){
                if(len<minLen) minLen = len;
                break;
            }
            pos++;
        }
        if(v<s && len === nums.length){
            minLen = 0;
            break;
        }
    }
    return minLen;
};


// beat 95.86%
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    if(s === 0 || nums.length === 0) return 0;
    let start = 0,
        end = 0,
        min = Number.MAX_SAFE_INTEGER,
        sum = 0;
    while(start < nums.length && end < nums.length){
        
        while(end< nums.length && sum< s){
              sum += nums[end++];
        }
        
        while(sum>=s && start < nums.length){
            min = Math.min(min,end-start);
            sum -= nums[start++];
        }
        
    }
    
    return min === Number.MAX_SAFE_INTEGER ? 0 : min;
};