// Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

// Example 1:
// Input: [1,4,3,2]

// Output: 4
// Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).
// Note:
// n is a positive integer, which is in the range of [1, 10000].
// All the integers in the array will be in the range of [-10000, 10000].


// 首先来个最慢的方法

// beat 99.47%
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let num = nums.sort((a,b)=> a-b);
    let rNum = 0;
    for(let i = 0; i< nums.length;i=i+2){
        rNum += nums[i];
    }
    return rNum;
};


// beat 100%
// 这个居然能100%
// 看来是测试用例优化的锅
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    const a = new Array(20000);
    for(let i = 0;i<nums.length;i++){
        let n = nums[i]+10000;
        a[n] = a[n] === undefined ? 1 : a[n] + 1;
    }
    let n = 0; let result = 0;
    
    for(let i=0; i< 20000;i++){
        if(a[i] === undefined) continue;
        while(a[i]>0){
             if(n%2 === 0){
                 result += i-10000;
             }
            ++n;
            --a[i];
        }
    }
    return result;
};