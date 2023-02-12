// Follow up for "Remove Duplicates":
// What if duplicates are allowed at most twice?

// For example,
// Given sorted array nums = [1,1,1,2,2,3],

// Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3. It doesn't matter what you leave beyond the new length.

// need extra place
// beat 95.6%
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length<3) return nums.length;
    let store = [nums[0],nums[1]];
    for(let i=2;i<nums.length;i++){
        if(nums[i] !== nums[i-2]){
            store.push(nums[i]);
        }
    }
    for(let i =0;i<store.length;i++){
        nums[i] = store[i];
    }
    return store.length;
};


// beat 100%
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let pos = 0,l = nums.length;
    for(let i=0;i<l;i++){
        if(nums[i] !== nums[i+2] || i>l-2){
            nums[pos] = nums[i];
            ++pos;
        }
    }
    return pos;
};