/*
Given a non-empty integer array of size n, find the minimum number of moves required to make all array elements equal, where a move is incrementing n - 1 elements by 1.

Example:

    Input:
        [1,2,3]

Output:
    3

Explanation:
    Only three moves are needed (remember each move increments two elements):

[1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
*/


/**
 * Runtime: 68 ms, faster than 54.88% of JavaScript online submissions for Minimum Moves to Equal Array Elements.
 * Memory Usage: 37.4 MB, less than 100.00% of JavaScript online submissions for Minimum Moves to Equal Array Elements.
 * @param {number[]} nums
 * @return {number}
 */
const minMoves2 = function (nums) {
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < min) min = nums[i];
    }
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result += nums[i] - min;
    }
    return result;
};



/**
 * Runtime: 72 ms, faster than 40.65% of JavaScript online submissions for Minimum Moves to Equal Array Elements.
 * Memory Usage: 37.5 MB, less than 100.00% of JavaScript online submissions for Minimum Moves to Equal Array Elements.
 * @param {number[]} nums
 * @return {number}
 */
const minMoves = function (nums) {
    let min = Number.MAX_SAFE_INTEGER;
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result += nums[i];
        if (nums[i] < min) min = nums[i];
    }

    return result - min * nums.length;
};


const assert = require('assert');

const test = [
    [[1, 2, 3], 3],
    [[1,1,2147483647], 2147483646],
];


test.forEach(([A, r], index) => {
    try {
        assert.deepEqual(minMoves(A), r);
    } catch (e) {
        console.log(`${index} occur error`);
        console.log(e);
        throw e;
    }
});
