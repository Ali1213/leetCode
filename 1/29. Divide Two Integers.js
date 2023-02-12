/*
 Given two integers dividend and divisor, divide two integers without using multiplication, division and mod operator.

Return the quotient after dividing dividend by divisor.

The integer division should truncate toward zero, which means losing its fractional part. For example, truncate(8.345) = 8 and truncate(-2.7335) = -2.

Example 1:

Input: dividend = 10, divisor = 3
Output: 3
Explanation: 10/3 = truncate(3.33333..) = 3.
Example 2:

Input: dividend = 7, divisor = -3
Output: -2
Explanation: 7/-3 = truncate(-2.33333..) = -2.
Note:

Both dividend and divisor will be 32-bit signed integers.
The divisor will never be 0.
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 231 − 1 when the division result overflows.
*/


/**
 * Runtime: 3484 ms, faster than 24.31% of JavaScript online submissions for Divide Two Integers.
 * Memory Usage: 38.3 MB, less than 16.67% of JavaScript online submissions for Divide Two Integers.
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = (dividend, divisor) => {
    const isMin = (dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)
    let divid = Math.abs(dividend)
    const or = Math.abs(divisor)
    if (divisor === 1 || divisor === -1) {
        return isMin ? isBig(-divid) : isBig(divid)
    }

    function isBig(d) {
        if (d > 2147483647) return 2147483647
        return d
    }

    let send = 0

    while (divid >= or) {
        divid -= or
        send += 1
    }
    return isMin ? -send : send
}

const { normalTest } = require('../test')


const tests = [
    {
        params: [10, 3],
        result: 3,
    },
    {
        params: [7, -3],
        result: -2,
    },
    {
        params: [1, -1],
        result: -1,
    },
    {
        params: [-2147483648, -1],
        result: 2147483647,
    },
]

normalTest(tests, divide)
