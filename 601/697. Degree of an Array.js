// Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

// Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

// Example 1:
// Input: [1, 2, 2, 3, 1]
// Output: 2
// Explanation: 
// The input array has a degree of 2 because both elements 1 and 2 appear twice.
// Of the subarrays that have the same degree:
// [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
// The shortest length is 2. So return 2.
// Example 2:
// Input: [1,2,2,3,1,4,2]
// Output: 6
// Note:

// nums.length will be between 1 and 50,000.
// nums[i] will be an integer between 0 and 49,999.

// beat 66.33%
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let maxL = 0;
    let maxV = 0;
    let a = new Set();
    for(let i=0;i<nums.length;i++){
        let s = nums[i];
        if(a.has(s)) continue;
        a.add(s);
        let count = 1;
        let pos = i;
        for(let j=i+1;j<nums.length;j++){
            if(nums[j] === s){
                ++count;
                pos = j;
            }
        }
        if(count>maxL) {
            maxL = count;
            maxV = pos - i+1;
        }else if (count === maxL){
            if(pos-i+1<maxV){
                maxL = count;
                maxV = pos-i+1;
            }
        }
    }
    return maxV;
};


// beat 65.31%
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let a = new Map();
    
    for(let i = 0;i<nums.length;i++){
        let v = a.get(nums[i]);
        if(v){
            ++v[0];
            v[2] = i;
        }else{
            a.set(nums[i],[1,i,i]);
        } 
    }
    
    let maxV = 0, maxCount=0;
    for(let v of a.values()){
        if(v[0]>maxCount){
            maxV = v[2] - v[1] + 1;
            maxCount = v[0];
        }else if(v[0] === maxCount){
            if(v[2] - v[1] + 1 < maxV){
                maxV = v[2] - v[1] + 1;
            }
        }
    }
    
    return maxV;
};