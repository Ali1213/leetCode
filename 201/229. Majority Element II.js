
// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

// Note: The algorithm should run in linear time and in O(1) space.

// Example 1:

// Input: [3,2,3]
// Output: [3]
// Example 2:

// Input: [1,1,1,3,3,2,2,2]
// Output: [1,2]

// beat 97.83%
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
    let v1 = nums[0], count1 = 1;
    let v2 = 0.1, count2 = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === v1) {
            count1++;
            continue;
        } else if (nums[i] === v2) {
            count2++;
            continue;
        }

        if (count1 === 0) {
            v1 = nums[i]
            count1 = 1
        } else if (count2 === 0) {
            v2 = nums[i]
            count2 = 1
        } else {
            --count1;
            --count2;
        }
    }

    count1 = 0; count2 = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === v1) {
            count1++
        } else if (nums[i] === v2) {
            count2++
        }
    }
    let result = []
    if (count1 > nums.length / 3) result.push(v1)
    if (count2 > nums.length / 3) result.push(v2)

    return result
};