/*
We define a harmounious array as an array where the difference between its maximum value and its minimum value is exactly 1.

Now, given an integer array, you need to find the length of its longest harmonious subsequence among all its possible subsequences.

Example 1:

Input: [1,3,2,2,5,2,3,7]
Output: 5
Explanation: The longest harmonious subsequence is [3,2,2,2,3].


Note: The length of the input array will not exceed 20,000.
*/


/**
 * Runtime: 100 ms, faster than 76.68% of JavaScript online submissions for Longest Harmonious Subsequence.
 * Memory Usage: 42.4 MB, less than 66.67% of JavaScript online submissions for Longest Harmonious Subsequence.
 * @param {number[]} nums
 * @return {number}
 */
const findLHS = (nums) => {
    const map = new Map();
    const s = [];
    for (let i = 0; i < nums.length; i += 1) {
        let v = map.get(nums[i]);
        if (v === undefined) {
            v = 0;
            s.push(nums[i]);
        }
        map.set(nums[i], v + 1);
    }
    let max = 0;

    for (let i = 0; i < s.length; i += 1) {
        const v = map.get(s[i]);
        const v1 = map.get(s[i] + 1);
        const v2 = map.get(s[i] - 1);
        if (v1) {
            max = Math.max(max, v + v1);
        }
        if (v2) {
            max = Math.max(max, v + v2);
        }
    }
    return max;
};


const { normalTest } = require('../test/index');

const test = [{
    params: [[1, 3, 2, 2, 5, 2, 3, 7]],
    result: 5,
}, {
    params: [[1, 1, 1, 1]],
    result: 0,
}];

normalTest(test, findLHS);
