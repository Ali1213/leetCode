/*
Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.


    Example 1:

Input: "Hello"
Output: "hello"
Example 2:

Input: "here"
Output: "here"
Example 3:

Input: "LOVELY"
Output: "lovely"
*/

/**
 * @param {string} str
 * @return {string}
 */
const toLowerCase = function (str) {
    return str.toLowerCase()
}


const {normalTest} = require('../test/index')

const test = [
    {
        params: ['Hello'],
        result: 'hello',
    },
    {
        params: ['here'],
        result: 'here',
    },
    {
        params: ['LOVELY'],
        result: 'lovely',
    },
]

normalTest(test, toLowerCase)

