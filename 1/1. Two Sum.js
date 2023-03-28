// # Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
// Example:
//
// Given nums = [2, 7, 11, 15], target = 9,
//
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1]

var twoSum2 = function(nums, target) {
    let len = nums.length,
        abd ={};
    for(let i = 0;i<len;i++){
        abd[nums[i]] = i;
    }

    for(let i=0;i<len;i++){
        let n = abd[target - nums[i]];
        if(n+1 && n!==i){
            return [i,n];
        }
    }
};

var twoSum2 = function(nums, target) {
    let len = nums.length;
    for(let i=0;i<len;i++){
        let index = nums.indexOf(target-nums[i],i+1);
        if(index !== -1){
            return [i,index];
        }
    }
};