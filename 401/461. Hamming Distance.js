/*
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

    Given two integers x and y, calculate the Hamming distance.

    Note:
0 ≤ x, y < 231.

Example:

    Input: x = 1, y = 4

Output: 2

Explanation:
    1   (0 0 0 1)
4   (0 1 0 0)
↑   ↑

The above arrows point to positions where the corresponding bits are different.
*/

/**
 * Runtime: 48 ms, faster than 93.36% of JavaScript online submissions for Hamming Distance.
 * Memory Usage: 33.9 MB, less than 62.50% of JavaScript online submissions for Hamming Distance.
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = function (x, y) {
    let v = x ^ y;
    let count = 0;
    while (v > 0) {
        count += v % 2;
        v >>= 1;
    }
    return count;
};


const assert = require('assert');

const test = [
    [1, 4, 2],
    [1, 5, 1],
];


test.forEach(([A, B, r], index) => {
    try {
        assert.deepEqual(hammingDistance(A, B), r);
    } catch (e) {
        console.log(`${index} occur error`);
        console.log(e);
        throw e;
    }
});
