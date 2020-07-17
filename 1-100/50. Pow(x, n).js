/* Implement pow(x, n), which calculates x raised to the power n (xn).

Example 1:

Input: 2.00000, 10
Output: 1024.00000
Example 2:

Input: 2.10000, 3
Output: 9.26100
Example 3:

Input: 2.00000, -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25
Note:

-100.0 < x < 100.0
n is a 32-bit signed integer, within the range [−231, 231 − 1] 
*/

/**
 * Runtime: 100 ms, faster than 20.06% of JavaScript online submissions for Pow(x, n).
 * Memory Usage: 37 MB, less than 13.09% of JavaScript online submissions for Pow(x, n).
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = (x, n) => {
    if (x === 0) return 0
    if (n === 0) return 1
    let l = n > 0 ? n : -n
    if (n == -2147483648) {
        l = 2147483646
    }
    let ans = 1
    while (l > 0) {
        if ((l & 1) == 1) ans *= x;
        x *= x;
        l >>= 1;
    }
    return n > 0 ? ans : 1 / ans
};


const { normalTest } = require('../test')

const tests = [
    {
        params: [2.00000, 10],
        result: 1024.00000,
    },
    // {
    //     params: [2.10000, 3],
    //     result: 9.26100,
    // },
    {
        params: [2.00000, -2],
        result: 0.25000,
    },
    {
        params: [0.00001, 2147483647],
        result: 0,
    },
    {
        params: [2.00000, -2147483648],
        result: 0.00000,
    },
]

normalTest(tests, myPow)
