/**
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:

P     I    N
A   L S  I G
Y A   H R
P     I
 */


/**
 * Runtime: 88 ms, faster than 74.58% of JavaScript online submissions for ZigZag Conversion.
 * Memory Usage: 38.5 MB, less than 88.89% of JavaScript online submissions for ZigZag Conversion.
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
    if (numRows === 1) return s
    const push = (arr, str, index) => {
        if (index >= 0 && index < str.length) {
            arr.push(str[index])
        }
    }
    const store = []
    let i = 0
    const interval = numRows + numRows - 2
    while (i < numRows) {
        let t = 0
        while (t < s.length + numRows) {
            if (i === 0 || i === numRows - 1) {
                push(store, s, t + i)
            } else {
                push(store, s, t - i)
                push(store, s, t + i)
            }
            t += interval
        }
        i += 1
    }
    return store.join('')
}


const { normalTest } = require('../test')

const tests = [
    {
        params: ['PAYPALISHIRING', 3],
        result: 'PAHNAPLSIIGYIR',
    },
    {
        params: ['PAYPALISHIRING', 4],
        result: 'PINALSIGYAHRPI',
    },
    {
        params: ['A', 1],
        result: 'A',
    },
    {
        params: ['AB', 1],
        result: 'AB',
    },
    {
        params: ['ABCD', 3],
        result: 'ABDC',
    },
]

normalTest(tests, convert)
