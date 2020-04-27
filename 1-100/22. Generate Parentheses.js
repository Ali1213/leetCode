/* Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
] */


/**
 * @param {number} n
 * @return {string[]}
 * Runtime: 64 ms, faster than 24.93% of JavaScript online submissions for Generate Parentheses.
Memory Usage: 35.9 MB, less than 30.77% of JavaScript online submissions for Generate Parentheses.
 */
// (())(())
const generateParenthesis = (n) => {
    if (n === 0) return ['']
    const r = []

    for (let i = 0; i < n; i++) {
        const left = generateParenthesis(i)
        const right = generateParenthesis(n - i - 1)

        for (let j = 0; j < left.length; j++) {
            for (let k = 0; k < right.length; k++) {
                r.push(`(${left[j]})${right[k]}`)
            }
        }
    }

    return r
}

const { resultArrEqual } = require('../test')


const tests = [
    {
        params: [0],
        result: [
            '',
        ],
    },
    {
        params: [1],
        result: [
            '()',
        ],
    },
    {
        params: [2],
        result: [
            '(())',
            '()()',
        ],
    },
    {
        params: [3],
        result: [
            '((()))',
            '(()())',
            '(())()',
            '()(())',
            '()()()',
        ],
    },
    {
        params: [4],
        result: [
            '(((())))',
            '((()()))',
            '((())())',
            '((()))()',
            '(()(()))',
            '(()()())',
            '(()())()',
            '(())(())',
            '(())()()',
            '()((()))',
            '()(()())',
            '()(())()',
            '()()(())',
            '()()()()',
        ],
    },
]

resultArrEqual(tests, generateParenthesis)
