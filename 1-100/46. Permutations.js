/*
Given a collection of distinct integers, return all possible permutations.

    Example:

Input: [1,2,3]
Output:
    [
        [1,2,3],
        [1,3,2],
        [2,1,3],
        [2,3,1],
        [3,1,2],
        [3,2,1]
    ]
*/


/**
 * Runtime: 100 ms, faster than 24.45% of JavaScript online submissions for Permutations.
 * Memory Usage: 39.9 MB, less than 12.25% of JavaScript online submissions for Permutations.
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function(nums) {
    const result = []


    const go = (cur, rest) => {
        if (rest.length === 0){
            result.push(cur)
            return
        }
        for(let i = 0; i< rest.length; i++){

            go(
                [...cur, rest[i]],
                [...rest.slice(0, i), ...rest.slice(i+1)]
            )
        }
    }
    go([], nums)
    return result
};


const {normalTest} = require('../test')

const tests = [
    {
        params: [[1, 2, 3]],
        result: [
            [1, 2, 3],
            [1, 3, 2],
            [2, 1, 3],
            [2, 3, 1],
            [3, 1, 2],
            [3, 2, 1],
        ],
    },
]

normalTest(tests, permute)
