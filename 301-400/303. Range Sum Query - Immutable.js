/*
Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

    Example:
Given nums = [-2, 0, 3, -5, 2, -1]

sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3
Note:
    You may assume that the array does not change.
    There are many calls to sumRange function.
*/


/**
 * Runtime: 96 ms, faster than 67.28% of JavaScript online submissions for Range Sum Query - Immutable.
 * Memory Usage: 44.5 MB, less than 100.00% of JavaScript online submissions for Range Sum Query - Immutable.
 * @param {number[]} nums
 */
const NumArray = function (nums) {
    this.n = new Array(nums.length + 1);
    this.n[0] = 0;
    for (let i = 0; i < nums.length; i++) {
        this.n[i + 1] = nums[i] + this.n[i];
    }
};
/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
    return this.n[j+1] - this.n[i];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
