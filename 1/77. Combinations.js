/*
Given two integers n and k, return all possible combinations of k numbers out of 1 ...n.

    Example:

Input: n = 4, k = 2
Output:
[
    [2, 4],
    [3, 4],
    [2, 3],
    [1, 2],
    [1, 3],
    [1, 4],
]
*/


/**
 * Runtime: 196 ms, faster than 35.42% of JavaScript online submissions for Combinations.
 * Memory Usage: 45.9 MB, less than 25.93% of JavaScript online submissions for Combinations.
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = (n, k) => {
    const result = [];
    if (k > n) return result

    function find(s, owned, j) {
        if (owned.length == k) {
            result.push(owned)
            return;
        }
        for (let i = j; i <= s; i++) {
            const now = owned.slice();
            now.push(i)
            find(s, now, i + 1)
        }
    }
    find(n, [], 1)
    return result
};

var combine2 = (n, k) => {
    const result = [];
    if (k > n) return result

    find(new Array(n).fill(0).map((item, i) => i + 1), [], 0)

    function find(s, owned, j) {
        if (owned.length == k) {
            result.push(owned)
            return;
        }
        for (let i = j; i < s.length; i++) {
            const now = owned.slice();
            now.push(s[i])
            find(s, now, i + 1)
        }
    }
    return result
};


const { normalTest } = require('../test')

const tests = [
    {
        params: [4, 2],
        result: [
            [2, 4],
            [3, 4],
            [2, 3],
            [1, 2],
            [1, 3],
            [1, 4],
        ],
    },
]

normalTest(tests, combine)