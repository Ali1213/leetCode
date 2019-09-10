/*
You have a total of n coins that you want to form in a staircase shape, where every k-th row must have exactly k coins.

    Given n, find the total number of full staircase rows that can be formed.

    n is a non-negative integer and fits within the range of a 32-bit signed integer.

    Example 1:

n = 5

The coins can form the following rows:
¤
¤ ¤
¤ ¤

Because the 3rd row is incomplete, we return 2.
Example 2:

n = 8

The coins can form the following rows:
¤
¤ ¤
¤ ¤ ¤
¤ ¤

Because the 4th row is incomplete, we return 3.
*/

/**
 * Runtime: 88 ms, faster than 63.48% of JavaScript online submissions for Arranging Coins.
 * Memory Usage: 36.2 MB, less than 33.33% of JavaScript online submissions for Arranging Coins.
 * @param {number} n
 * @return {number}
 */
const arrangeCoins2 = function (n) {
    let i = 1;
    let total = 0;
    while (n >= i) {
        total += 1;
        n -= i;
        i += 1;
    }
    return total;
};


/*
* Runtime: 84 ms, faster than 77.09% of JavaScript online submissions for Arranging Coins.
* Memory Usage: 36.3 MB, less than 33.33% of JavaScript online submissions for Arranging Coins.
* */
const arrangeCoins = function (n) {
    let total = 1;
    while (n >= total) {
        n -= total;
        total += 1;
    }
    return total - 1;
};


const assert = require('assert');

const test = [
    [5, 2],
    [8, 3],
];


test.forEach(([A, r], index) => {
    try {
        assert.deepEqual(arrangeCoins(A), r);
    } catch (e) {
        console.log(`${index} occur error`);
        console.log(e);
        throw e;
    }
});
