/**
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.

Example 1:

Input: 3
Output: "III"
Example 2:

Input: 4
Output: "IV"
Example 3:

Input: 9
Output: "IX"
Example 4:

Input: 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.
Example 5:

Input: 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 */

/**
 * Runtime: 140 ms, faster than 67.21% of JavaScript online submissions for Integer to Roman.
 * Memory Usage: 41.1 MB, less than 50.00% of JavaScript online submissions for Integer to Roman.
 * @param {number} num
 * @return {string}
 */
const intToRoman = (num) => {
    const store = [
        {
            key: 'M',
            value: 1000,
            biff: 100,
            lk: 'C',
        },
        {
            key: 'D',
            value: 500,
            biff: 100,
            lk: 'C',
        },
        {
            key: 'C',
            value: 100,
            biff: 10,
            lk: 'X',
        },
        {
            key: 'L',
            value: 50,
            biff: 10,
            lk: 'X',
        },
        {
            key: 'X',
            value: 10,
            biff: 1,
            lk: 'I',
        },
        {
            key: 'V',
            value: 5,
            biff: 1,
            lk: 'I',
        },
        {
            key: 'I',
            value: 1,
        },
    ]
    let v = num
    let s = ''
    for (let i = 0; i < store.length; i++) {
        let temp = ''
        let bin
        if (v >= store[i].value) {
            bin = Math.floor(v / store[i].value)
            v %= store[i].value
            temp += store[i].key.repeat(bin)
        }
        if (store[i].biff) {
            const b = store[i].value - store[i].biff
            if (v >= b) {
                temp += store[i].lk + store[i].key
                v -= b
            }
        }
        s += temp
    }
    return s
}


const { normalTest } = require('../test')

const tests = [
    {
        params: [3],
        result: 'III',
    },
    {
        params: [4],
        result: 'IV',
    },
    {
        params: [9],
        result: 'IX',
    },
    {
        params: [58],
        result: 'LVIII',
    },
    {
        params: [1994],
        result: 'MCMXCIV',
    },
    {
        params: [1],
        result: 'I',
    },
]

normalTest(tests, intToRoman)
