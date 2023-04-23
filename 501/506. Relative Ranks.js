/* Given scores of N athletes, find their relative ranks and the people with the top three highest scores, who will be awarded medals: "Gold Medal", "Silver Medal" and "Bronze Medal".

Example 1:
Input: [5, 4, 3, 2, 1]
Output: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
Explanation: The first three athletes got the top three highest scores, so they got "Gold Medal", "Silver Medal" and "Bronze Medal".
For the left two athletes, you just need to output their relative ranks according to their scores.
Note:
N is a positive integer and won't exceed 10,000.
All the scores of athletes are guaranteed to be unique.
*/

/**
 * Runtime: 88 ms, faster than 77.25% of JavaScript online submissions for Relative Ranks.
 * Memory Usage: 38.7 MB, less than 100.00% of JavaScript online submissions for Relative Ranks.
 * @param {number[]} nums
 * @return {string[]}
 */
const findRelativeRanks = function (nums) {
    const sorted = nums.slice().sort((a, b) => b - a);
    const s = new Map();
    s.set(sorted[0], 'Gold Medal');
    s.set(sorted[1], 'Silver Medal');
    s.set(sorted[2], 'Bronze Medal');
    for (let i = 3; i < sorted.length; i++) {
        s.set(sorted[i], String(i + 1));
    }
    for (let i = 0; i < nums.length; i++) {
        nums[i] = s.get(nums[i]);
    }
    return nums;
};


const assert = require('assert');

const test = [
    [[5, 4, 3, 2, 1], ['Gold Medal', 'Silver Medal', 'Bronze Medal', '4', '5']],
    [[5, 4], ['Gold Medal', 'Silver Medal']],
    [[10, 3, 8, 9, 4], ['Gold Medal', '5', 'Bronze Medal', 'Silver Medal', '4']],
];


test.forEach(([A, r], index) => {
    try {
        assert.deepEqual(findRelativeRanks(A), r);
    } catch (e) {
        console.log(`${index} occur error`);
        console.log(e);
        throw e;
    }
});
