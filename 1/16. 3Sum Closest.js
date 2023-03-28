// Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

//     For example, given array S = {-1 2 1 -4}, and target = 1.

//     The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

// beat 63.89%
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums = nums.sort((a,b)=>a-b);
    let min = Number.MAX_SAFE_INTEGER;
    for(let i = 0;i<nums.length-2;i++){
        let left = i+1; let right = nums.length -1;
        while(left < right){
            let n = nums[left] + nums[right] + nums[i] - target;
            if(Math.abs(min)>Math.abs(n)) min = n;
            if(n === 0){
                return target;
            }else if (n>0){
                --right;
            }else{
                ++left;
            }
        }
    }
    return min + target;
};