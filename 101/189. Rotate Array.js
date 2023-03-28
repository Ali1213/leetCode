// Rotate an array of n elements to the right by k steps.

// For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].

// Note:
// Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.

// [show hint]

// Related problem: Reverse Words in a String II

// Credits:
// Special thanks to @Freezen for adding this problem and creating all test cases.

// 这个思路是最简单的，多次移动数组
// beat4.95%
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if(nums === null || nums.length < 2 || k === 0 ) return
    let len = nums.length;
    k = k % len
    while(--k>=0){
        let temp = nums[len-1];
        for(let i =len-1;i>0;i--){
            nums[i] = nums[i-1];
        }
        nums[0] = temp;
    }
};


// 这个思路需要额外O(n)的空间
// beat 95.95%
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if(nums === null || nums.length < 2 || k === 0 ) return;
    let len = nums.length;
    k = k % len;
    let ok = nums.slice(len-k).concat(nums.slice(0,len-k));
    for(let i=0;i<len;i++){
        nums[i] = ok[i];
    }
    
};


// 这次只需要额外O（k）的空间
// beat 100%
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if(nums === null || nums.length < 2 || k === 0 ) return;
    let len = nums.length;
    k = k % len;
    let pos = len-k;
    let ok = nums.slice(0,pos);
    let i = pos,j=0;
    while(j<k){
        nums[j] = nums[i];
        i++;
        j++;
    }
    i = 0;
    while(j<len){
        nums[j] = ok[i];
        i++;
        j++;
        
    }
};


// beat 88.74%
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if(nums === null || nums.length < 2 || k === 0 ) return;
    let len = nums.length;
    k = k % len;
    let pos = len-k;
    nums.splice(0,0,...nums.slice(pos))
    nums.length = len;
};

// beat 85.43%
var rotate = function(nums, k) {
    if(nums === null || nums.length < 2 || k === 0 ) return;
    let len = nums.length;
    k = k % len;
    while(--k>=0){
        nums.unshift(nums.pop());
    }
    
};