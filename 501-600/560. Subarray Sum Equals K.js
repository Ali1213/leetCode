// Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

// Example 1:
// Input:nums = [1,1,1], k = 2
// Output: 2
// Note:
// The length of the array is in range [1, 20,000].
// The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].


// beat 19.51%
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let n = nums.length
    let count = 0;

    if (n === 0) return count;

    let start = 0;
    for (let i = 0; i < n; i++) {
        start += nums[i]
        let total = start;
        if (start == k) count++
        for (let j = i + 1; j < n; j++) {
            total = total + nums[j] - nums[j - i - 1]
            if (total == k) count++
        }
    }
    return count;

};




// O(n)的算法
// beat 98.78%
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let sum = 0, count = 0;
    let hash = new Map([[0, 1]])

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        if (hash.has(sum - k)) {
            count += hash.get(sum - k)
        }
        hash.set(sum, (hash.get(sum) + 1) || 1)
    }
    return count
};