/* Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


Example:

Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
Note:

Although the above answer is in lexicographical order, your answer could be in any order you want. */


/**
 * Runtime: 72 ms, faster than 8.19% of JavaScript online submissions for Letter Combinations of a Phone Number.
 * Memory Usage: 33.8 MB, less than 92.86% of JavaScript online submissions for Letter Combinations of a Phone Number.
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {
    if (digits.length === 0) return []
    const dict = [
        undefined,
        undefined,
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
        ['g', 'h', 'i'],
        ['j', 'k', 'l'],
        ['m', 'n', 'o'],
        ['p', 'q', 'r', 's'],
        ['t', 'u', 'v'],
        ['w', 'x', 'y', 'z'],
    ]
    let result = dict[digits[0]]
    let now = []
    for (let i = 1; i < digits.length; i++) {
        for (let j = 0; j < result.length; j++) {
            for (let k = 0; k < dict[digits[i]].length; k++) {
                now.push(result[j] + dict[digits[i]][k])
            }
        }
        result = now
        now = []
    }
    return result
}


const { resultArrEqual } = require('../test')


const tests = [
    {
        params: ['23'],
        result: ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'],
    },
    {
        params: [''],
        result: [],
    },
]

resultArrEqual(tests, letterCombinations)
