// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

// You are given a target value to search. If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.


// 不稳定算法，最坏值为O（n）
// beat 96.64%
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    if (nums[0] === target) return 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        } else if (nums[i - 1] < target && nums[i] > target) {
            return -1;
        }
    }
    return -1
};


// beat 13.17%
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let start = 0, end = nums.length - 1;
    if (nums[start] > nums[end]) {
        while (start < end) {
            let mid = (start + end) / 2 >> 0;
            if (nums[start] < nums[mid]) {
                start = mid;
            } else {
                end = mid;
            }
        }
        let p = start;
        if (target >= nums[0]) {
            end = p;
            start = 0;
        } else {
            start = p + 1;
            end = nums.length - 1;
        }
    }

    while (start <= end) {
        let mid = (start + end) / 2 >> 0;
        if (nums[mid] === target) return mid;
        if (nums[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1
};