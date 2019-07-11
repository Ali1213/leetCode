/* 
A subarray A[i], A[i+1], ..., A[j] of A is said to be turbulent if and only if:

For i <= k < j, A[k] > A[k+1] when k is odd, and A[k] < A[k+1] when k is even;
OR, for i <= k < j, A[k] > A[k+1] when k is even, and A[k] < A[k+1] when k is odd.
That is, the subarray is turbulent if the comparison sign flips between each adjacent pair of elements in the subarray.

Return the length of a maximum size turbulent subarray of A.

 

Example 1:

Input: [9,4,2,10,7,8,8,1,9]
Output: 5
Explanation: (A[1] > A[2] < A[3] > A[4] < A[5])
Example 2:

Input: [4,8,12,16]
Output: 2
Example 3:

Input: [100]
Output: 1
 

Note:

1 <= A.length <= 40000
0 <= A[i] <= 10^9
 */


/**
 * Runtime: 72 ms, faster than 92.13% of JavaScript online submissions for Longest Turbulent Subarray.
 * Memory Usage: 41.7 MB, less than 71.88% of JavaScript online submissions for Longest Turbulent Subarray.
 * @param {number[]} A
 * @return {number}
 */
var maxTurbulenceSize = function (A) {
    let maxCount = 0;
    let now = 1, now2 = 1;
    let s = true;
    for (let i = 1; i < A.length; i++) {

        if (A[i] === A[i - 1]) {
            maxCount = Math.max(now, maxCount, now2);
            now = 1;
            now2 = 1;
            continue;
        }
        let v = A[i] > A[i - 1];

        if (v === s) {
            now += 1;
            maxCount = Math.max(now2, maxCount)
            now2 = 1;

        } else {
            now2 += 1;
            maxCount = Math.max(now, maxCount)
            now = 1;
        }

        s = !s
    }
    return Math.max(now, maxCount, now2)
};




const assert = require('assert')
var test = [
    [[9, 4, 2, 10, 7, 8, 8, 1, 9], 5],
    [[4, 8, 12, 16], 2],
    [[100], 1],
]


test.forEach(([A, r]) => {
    console.log(r)
    assert.deepEqual(maxTurbulenceSize(A), r)
})




/**
 * 略微做一些优化，省略一些变量
 * Runtime: 80 ms, faster than 62.92% of JavaScript online submissions for Longest Turbulent Subarray.
 * Memory Usage: 41.7 MB, less than 84.38% of JavaScript online submissions for Longest Turbulent Subarray.
 * @param {number[]} A
 * @return {number}
 */
var maxTurbulenceSize = function (A) {
    let maxCount = 1;
    let inc = 1, dec = 1;
    for (let i = 1; i < A.length; i++) {
        if (A[i] > A[i - 1]) {
            inc = dec + 1;
            dec = 1;

        } else if(A[i] < A[i - 1]) {
            dec = inc + 1;
            inc = 1;
        } else {
            inc = 1;
            dec = 1;
        }
        maxCount = Math.max(inc, maxCount, dec)

    }
    return maxCount
};




var test = [
    [[9, 4, 2, 10, 7, 8, 8, 1, 9], 5],
    [[4, 8, 12, 16], 2],
    [[100], 1],
]


test.forEach(([A, r]) => {
    console.log(r)
    assert.deepEqual(maxTurbulenceSize(A), r)
})

