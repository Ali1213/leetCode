// Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

// Note: The solution set must not contain duplicate quadruplets.

// For example, given array S = [1, 0, -1, 0, -2, 2], and target = 0.

// A solution set is:
// [
//   [-1,  0, 0, 1],
//   [-2, -1, 1, 2],
//   [-2,  0, 0, 2]
// ]


// beat 89.13%
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let n = nums.sort((a,b)=>a-b);
    let result = [];
    let a = 0;
    let set = new Set();
    
    for(let a = 0; a< nums.length-3; a++){
        for(let b = a+1; b<nums.length-2;b++){
            let c = b + 1; let d = nums.length -1;
            while(c<d){
                let total = n[a] + n[b] + n[c] + n[d];
                if(total>target){
                    --d;
                }else if(total === target){
                    let r = String(n[a]) + String(n[b]) + String(n[c]) + String(n[d]);
                    if(!set.has(r)){
                        result.push([n[a],n[b],n[c],n[d]]);
                        set.add(r);
                    }
                    ++c;
                    --d;
                }else{
                    ++c
                }
            }
        }
    }
    
    return result;
};


// beat 89.13% 但是少占一些空间
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a,b)=>a-b);
    let result = [];
    let a = 0;
    
    for(let a = 0; a< nums.length-3; a++){
        if (nums[a] === nums[a - 1]) continue;
        for(let b = a+1; b<nums.length-2;b++){
            if(b>a+1 && nums[b] === nums[b-1]) continue;
            let c = b + 1; let d = nums.length -1;
            while(c<d){
                let total = nums[a] + nums[b] + nums[c] + nums[d];
                if(total>target){
                    --d;
                }else if(total === target){
                    result.push([nums[a],nums[b],nums[c],nums[d]]);
                    ++c;
                    --d;
                    while(c<d && nums[c] === nums[c-1]){
                        ++c;
                    }
                    while(c<d && nums[d] === nums[d+1]){
                        --d;
                    }
                }else{
                    ++c
                }
            }
        }
    }
    
    return result;
};