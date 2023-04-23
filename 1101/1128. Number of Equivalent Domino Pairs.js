/*
Given a list of dominoes, dominoes[i] = [a, b] is equivalent to dominoes[j] = [c, d] if and only if either (a==c and b==d), or (a==d and b==c) - that is, one domino can be rotated to be equal to another domino.

    Return the number of pairs (i, j) for which 0 <= i < j < dominoes.length, and dominoes[i] is equivalent to dominoes[j].



    Example 1:

Input: dominoes = [[1,2],[2,1],[3,4],[5,6]]
Output: 1


Constraints:

    1 <= dominoes.length <= 40000
1 <= dominoes[i][j] <= 9

*/


/**
 * Runtime: 80 ms, faster than 69.47% of JavaScript online submissions for Number of Equivalent Domino Pairs.
 * Memory Usage: 43 MB, less than 100.00% of JavaScript online submissions for Number of Equivalent Domino Pairs.
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
    const map = new Map();
    let count = 0;

    for(let i = 0; i< dominoes.length; i++){
        const key = dominoes[i][0] + '-' + dominoes[i][1];
        const mirroKey = dominoes[i][1] + '-' + dominoes[i][0];
        let value = map.get(key);
        let mirroValue = map.get(mirroKey);

        if(value) {
            map.set(key, value + 1)
        } else if(mirroValue){
            map.set(mirroKey, mirroValue + 1)
        } else {
            map.set(mirroKey, 1)
        }
    }

    map.forEach((value, key) => {
        if(value !== 1){
            count += value * (value - 1) / 2
        }
    })
    return count
};


const assert = require('assert');
var test = [
    [[[1, 2], [2, 1], [3, 4], [5, 6]], 1],
    [[[1,2],[2,1],[1,2],[2,1]], 6],
];


test.forEach(([A, r], index) => {
    try {

        assert.deepEqual(numEquivDominoPairs(A), r)
    } catch (e) {
        console.log(`${index} occur error`);
        console.log(e)
    }
});


/**
 * Runtime: 72 ms, faster than 83.86% of JavaScript online submissions for Number of Equivalent Domino Pairs.
 * Memory Usage: 42.9 MB, less than 100.00% of JavaScript online submissions for Number of Equivalent Domino Pairs.
 */
var numEquivDominoPairs = function (dominoes) {
    const map = new Map();
    let count = 0;

    for(let i = 0; i< dominoes.length; i++){
        const key = dominoes[i][0] + '-' + dominoes[i][1];
        const mirroKey = dominoes[i][1] + '-' + dominoes[i][0];
        let value = map.get(key);
        let mirroValue = map.get(mirroKey);

        if(value) {
            map.set(key, value + 1)
            count += value
        } else if(mirroValue){
            map.set(mirroKey, mirroValue + 1)
            count += mirroValue
        } else {
            map.set(mirroKey, 1)
        }
    }

    return count
};
