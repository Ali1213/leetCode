// Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).

// Note: The solution set must not contain duplicate subsets.

// Example:

// Input: [1,2,2]
// Output:
// [
//   [2],
//   [1],
//   [1,2,2],
//   [2,2],
//   [1,2],
//   []
// ]

// beat 98.88%
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let results = [[]];
    let set = new Set();
    let now = 1;
    nums = nums.sort((a,b)=> a-b)
    for(let i = 0; i<nums.length; i++){
        let pos = now;
        if(!set.has(nums[i])){
            pos = 0;
            set.add(nums[i])
        }
    
        now = results.length;
        for(let j = pos; j< now; j++){
            let now = results[j].slice();
            now.push(nums[i]);
            results.push(now);
        }
    }
    return results;
};