// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:

// The solution set must not contain duplicate triplets.

// Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

// beat 1.86%
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b)
    let results = []
    let record = new Set();
    for (let i = 0; i < nums.length - 1; i++) {
        let start = i + 1; let end = nums.length - 1;
        while (start < end) {
            let t = nums[i] + nums[start] + nums[end]
            if (t > 0) {
                end--;
            } else if (t === 0) {
                let r = [nums[i], nums[start], nums[end]];
                let n = r.join('')
                if (!record.has(n)) {
                    record.add(n)
                    results.push(r)
                }
                start++;
                end--;
            } else {
                start++
            }

        }

    }

    return results
};

// beat 53.64%
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=> a-b)
    let results = []
    let record = new Set();
    for(let i = 0; i< nums.length - 1;i++){
        if(i !== 0 && nums[i] == nums[i-1]) continue
        let start = i+1;let end = nums.length - 1;
        while(start < end){
            let t = nums[i] + nums[start] + nums[end]
            if(t>0){
                end--;
            }else if ( t === 0 ){
                let r = [nums[i], nums[start], nums[end]];
                let n = r.join('')
                if(!record.has(n)){
                    record.add(n)   
                    results.push(r)
                }
                start++;
                end--;
            }else {
                start++
            }
            
        }
        
    }

    return results
};



// beat 99.32%
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=> a-b)
    let results = []
    let record = new Set();
    for(let i = 0; i< nums.length - 2;i++){
        if(nums[i]>0) return results
        if(i > 0 && nums[i] == nums[i-1]) continue
        let start = i+1;let end = nums.length - 1;
        while(start < end){
            let t = nums[i] + nums[start] + nums[end]
            if(t>0){
                end--;
            }else if ( t === 0 ){
                results.push([nums[i], nums[start], nums[end]]);
                start++;
                end--;
                while(nums[start] === nums[start-1]){
                    start++
                }
                while(nums[end] === nums[end+1]){
                    end--
                }
            }else {
                start++
            }
            
        }
        
    }

    return results
};