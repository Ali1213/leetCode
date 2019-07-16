/* 
Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.  Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.

 

Example 1:

Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
Output: [2,2,2,1,4,3,3,9,6,7,19]
 

Constraints:

arr1.length, arr2.length <= 1000
0 <= arr1[i], arr2[i] <= 1000
Each arr2[i] is distinct.
Each arr2[i] is in arr1. 
*/


/**
 * Runtime: 48 ms, faster than 96.67% of JavaScript online submissions for Relative Sort Array.
 * Memory Usage: 33.6 MB, less than 100.00% of JavaScript online submissions for Relative Sort Array.
 * 先写个最简单的方法
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    let others = []; let map = new Map(); let results = new Array(arr1.length)
    for (let i = 0; i < arr2.length; i++) {
        map.set(arr2[i], 0)
    }
    for (let i = 0; i < arr1.length; i++) {
        if (map.has(arr1[i])) {
            map.set(arr1[i], map.get(arr1[i]) + 1)
        } else {
            others.push(arr1[i])
        }
    }
    let i = 0, rPos = 0;
    while (i < arr2.length) {
        let num = map.get(arr2[i])
        while (num > 0) {
            results[rPos] = arr2[i];
            rPos += 1;
            num -= 1;
        }
        i += 1
    }
    others = others.sort((a, b) => a - b)
    for(let i = 0; i< others.length; i++){
        results[rPos + i] = others[i]
    }
    return results
};



const assert = require('assert')
var test = [
    [[2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6], [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19]],
]


test.forEach(([A, B, r], index) => {
    try {

        assert.deepEqual(relativeSortArray(A, B), r)
    } catch (e) {
        console.log(`${index} occur error`)
        console.log(e)
    }
})

