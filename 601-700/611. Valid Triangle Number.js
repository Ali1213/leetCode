// Given an array consists of non-negative integers, your task is to count the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle.
// Example 1:
// Input: [2,2,3,4]
// Output: 3
// Explanation:
// Valid combinations are: 
// 2,3,4 (using the first 2)
// 2,3,4 (using the second 2)
// 2,2,3
// Note:
// The length of the given array won't exceed 1000.
// The integers in the given array are in the range of [0, 1000].


// beat 28.57%
/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
    nums = nums.sort((a, b) => a - b)
    let total = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] > nums[k]) {
                    total++;
                } else {
                    break;
                }
            }
        }
    }

    return total;
};



// beat 91.07%
/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
    nums.sort((a, b) => a - b)
    let total = 0;
    for (let k = nums.length - 1; k > 1; k--) {
        let i = 0, j = k - 1
        while (i < j) {
            if (nums[i] + nums[j] > nums[k]) {
                total += j - i
                j--
            } else {
                i++
            }
        }
    }

    return total;
};