/*
Given two positive integers x and y, an integer is powerful if it is equal to x^i + y^j for some integers i >= 0 and j >= 0.

Return a list of all powerful integers that have value less than or equal to bound.

    You may return the answer in any order.  In your answer, each value should occur at most once.



    Example 1:

Input: x = 2, y = 3, bound = 10
Output:
Explanation:
    2 = 2^0 + 3^0
3 = 2^1 + 3^0
4 = 2^0 + 3^1
5 = 2^1 + 3^1
7 = 2^2 + 3^1
9 = 2^3 + 3^0
10 = 2^0 + 3^2
Example 2:

Input: x = 3, y = 5, bound = 15
Output: [2,4,6,8,10,14]


Note:

    1 <= x <= 100
1 <= y <= 100
0 <= bound <= 10^6
*/


/**
 * Runtime: 56 ms, faster than 79.45% of JavaScript online submissions for Powerful Integers.
 * Memory Usage: 33.7 MB, less than 100.00% of JavaScript online submissions for Powerful Integers.
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function (x, y, bound) {
    const getVals = (k, b) => {
        let last = null
        const totals = []
        let i = 0
        while (true) {
            let v = Math.pow(k, i)
            if (v === last || v >= b) break
            totals.push(v)
            last = v
            i++
        }
        return totals
    }
    let v1 = getVals(x, bound)
    let v2 = getVals(y, bound)
    let v = new Set()
    for(let i = 0 ; i< v1.length; i++){
        for(let j = 0; j < v2.length; j++){
            if(v1[i] + v2[j] > bound)break;
            v.add(v1[i] + v2[j])
        }
    }
    return [...v]

}

const {resultArrEqual} = require('../test/index')

const test = [
    {
        params: [2, 3, 10],
        result: [2, 3, 4, 5, 7, 9, 10],
    },
    {
        params: [3, 5, 15],
        result: [2, 4, 6, 8, 10, 14],
    },
    {
        params: [2, 1, 10],
        result: [ 2, 3, 5, 9 ],
    },
]

resultArrEqual(test, powerfulIntegers)
