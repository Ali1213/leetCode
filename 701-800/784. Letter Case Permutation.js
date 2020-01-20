/*
Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.  Return a list of all possible strings we could create.

    Examples:
Input: S = "a1b2"
Output: ["a1b2", "a1B2", "A1b2", "A1B2"]

Input: S = "3z4"
Output: ["3z4", "3Z4"]

Input: S = "12345"
Output: ["12345"]
Note:

    S will be a string with length between 1 and 12.
S will consist only of letters or digits.
*/


/**
 * Runtime: 64 ms, faster than 97.52% of JavaScript online submissions for Letter Case Permutation.
 * Memory Usage: 37.6 MB, less than 33.33% of JavaScript online submissions for Letter Case Permutation.
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function (S) {
    let list = [S]
    for (let i = 0; i < S.length; i++) {
        if (S.charCodeAt(i) > 57) {
            let newList = []
            for(let j = 0; j< list.length; j++){
                let l = S[i].toLowerCase()
                newList.push(list[j].slice(0, i) + (l === S[i] ? S[i].toUpperCase() : l ) + list[j].slice(i+1))
            }
            list = list.concat(newList)
        }
    }
    return list
}


const {normalTest} = require('../test/index')

const test = [
    {
        params: ['a1b2'],
        result: ['a1b2', 'a1B2', 'A1b2', 'A1B2'],
    },
    {
        params: ['3z4'],
        result: ['3z4', '3Z4'],
    },
    {
        params: ['12345'],
        result: ['12345'],
    },
]

normalTest(test, letterCasePermutation)
