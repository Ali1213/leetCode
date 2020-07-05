/*
Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

    Example 1:

Input: num1 = "2", num2 = "3"
Output: "6"
Example 2:

Input: num1 = "123", num2 = "456"
Output: "56088"
Note:

    The length of both num1 and num2 is < 110.
Both num1 and num2 contain only digits 0-9.
Both num1 and num2 do not contain any leading zero, except the number 0 itself.
    You must not use any built-in BigInteger library or convert the inputs to integer directly.
*/

/**
 * Runtime: 120 ms, faster than 22.42% of JavaScript online submissions for Multiply Strings.
 Memory Usage: 37.9 MB, less than 40.61% of JavaScript online submissions for Multiply Strings.
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = (num1, num2) => {
    if (num1 === '0' || num2 === '0') return '0'
    const arr = new Array(num1.length + num2.length).fill(0)

    for (let i = num1.length - 1; i >= 0; i--) {
        for (let j = num2.length - 1; j >= 0; j--) {
            const v = Number(num1[i]) * Number(num2[j]) + arr[i + j + 1]
            arr[i + j] += Math.floor(v / 10)
            arr[i + j + 1] = v % 10
        }
    }
    if (arr[0] !== 0) return arr.join('')
    let i = 0
    while (i < arr.length - 1) {
        if (i !== 0) break
        i++
    }

    return arr.slice(i).join('')
}

const {normalTest} = require('../test')

const tests = [
    {
        params: ['2', '3'],
        result: '6',
    },
    {
        params: ['123', '456'],
        result: '56088',
    },
    {
        params: ['9', '9'],
        result: '81',
    },
]

normalTest(tests, multiply)
