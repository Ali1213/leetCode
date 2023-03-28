// Follow up for "Search in Rotated Sorted Array":
// What if duplicates are allowed?

// Would this affect the run-time complexity? How and why?

// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

// Write a function to determine if a given target is in the array.

// The array may contain duplicates.


// beat 10%
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
    if (nums === null || nums.length === 0) return false;
    if (nums[0] === target) return true;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === target) {
            return true;
        } else if (nums[i] > target && nums[i - 1] < target) {
            return false;
        }
    }
    return false;
};


// beat 88.33%
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = (left + right) / 2 >> 0;
        if (nums[mid] === target) return true;
        if (nums[mid] < nums[right]) {
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        } else if (nums[mid] > nums[right]) {
            if (target < nums[mid] && target >= nums[left]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            right = right - 1;
        }
    }
    return false;
};