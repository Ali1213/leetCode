/*
Given n points in the plane that are all pairwise distinct, a "boomerang" is a tuple of points (i, j, k) such that the distance between i and j equals the distance between i and k (the order of the tuple matters).

Find the number of boomerangs. You may assume that n will be at most 500 and coordinates of points are all in the range [-10000, 10000] (inclusive).

    Example:

Input:
    [[0,0],[1,0],[2,0]]

Output:
    2

Explanation:
    The two boomerangs are [[1,0],[0,0],[2,0]] and [[1,0],[2,0],[0,0]]
*/

/**
 * Runtime: 236 ms, faster than 69.40% of JavaScript online submissions for Number of Boomerangs.
 * Memory Usage: 41.7 MB, less than 100.00% of JavaScript online submissions for Number of Boomerangs.
 * @param {number[][]} points
 * @return {number}
 */
const numberOfBoomerangs = function (points) {
    let count = 0;
    for (let i = 0; i < points.length; i += 1) {
        const m = new Map();
        const store = new Array(points.length - 1);
        for (let j = 0; j < points.length; j += 1) {
            if (j === i) continue;
            const s = Math.pow(points[i][0] - points[j][0], 2) + Math.pow(points[i][1] - points[j][1], 2);
            store[j] = s;
            if (m.has(s)) {
                m.set(s, m.get(s) + 1);
            } else m.set(s, 1);
        }

        for (let k = 0; k < points.length; k += 1) {
            if (k === i) continue;
            const s2 = store[k];
            const v = m.get(s2);
            if (v > 1) {
                count += v - 1;
            }
        }
    }
    return count;
};


const assert = require('assert');

const test = [
    [[[0, 0], [1, 0], [2, 0]], 2],
    [[[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1]], 20],
];


test.forEach(([A, r], index) => {
    try {
        assert.deepEqual(numberOfBoomerangs(A), r);
    } catch (e) {
        console.log(`${index} occur error`);
        console.log(e);
        throw e;
    }
});
