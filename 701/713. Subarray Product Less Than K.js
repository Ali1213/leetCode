// Your are given an array of positive integers nums.

// Count and print the number of (contiguous) subarrays where the product of all the elements in the subarray is less than k.

// Example 1:
// Input: nums = [10, 5, 2, 6], k = 100
// Output: 8
// Explanation: The 8 subarrays that have product less than 100 are: [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6].
// Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
// Note:

// 0 < nums.length <= 50000.
// 0 < nums[i] < 1000.
// 0 <= k < 10^6.


// 计算时间超过限制
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {

    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        let v = nums[i];
        let p = i;
        while (v < k) {
            count++;
            p++;
            v *= nums[p]
        }
    }

    return count
};


// beat 96.77%
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {

    let count = 0;
    let p = 1;
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        p *= nums[i];
        while (j <= i && p >= k) {
            p /= nums[j]
            j++;
        }
        count += i - j + 1
    }
    return count
};