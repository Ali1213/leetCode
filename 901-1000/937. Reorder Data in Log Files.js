/*
You have an array of logs.  Each log is a space delimited string of words.

    For each log, the first word in each log is an alphanumeric identifier.  Then, either:

Each word after the identifier will consist only of lowercase letters, or;
Each word after the identifier will consist only of digits.
    We will call these two varieties of logs letter-logs and digit-logs.  It is guaranteed that each log has at least one word after its identifier.

    Reorder the logs so that all of the letter-logs come before any digit-log.  The letter-logs are ordered lexicographically ignoring identifier, with the identifier used in case of ties.  The digit-logs should be put in their original order.

    Return the final order of the logs.



    Example 1:

Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]


Constraints:

    0 <= logs.length <= 100
3 <= logs[i].length <= 100
logs[i] is guaranteed to have an identifier, and a word after the identifier.
*/

/**
 * Runtime: 56 ms, faster than 97.87% of JavaScript online submissions for Reorder Data in Log Files.
 * Memory Usage: 35.9 MB, less than 100.00% of JavaScript online submissions for Reorder Data in Log Files.
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
    const letters = []
    const nums = []
    for (let i = 0; i < logs.length; i++) {
        const index = logs[i].indexOf(' ')
        if (Number(logs[i][index + 1]) >= 0) {
            nums.push(logs[i])
        } else {
            letters.push(logs[i])
        }
    }
    const b = letters.sort((a, b) => {
        const aI = a.indexOf(' ')
        const bI = b.indexOf(' ')
        return a.substring(aI + 1) >= b.substring(bI + 1) ? 1 : -1
    })
    return b.concat(nums)
}


const {normalTest} = require('../test')

const test = [
    {
        params: [['dig1 8 1 5 1', 'let1 art can', 'dig2 3 6', 'let2 own kit dig', 'let3 art zero']],
        result: ['let1 art can', 'let3 art zero', 'let2 own kit dig', 'dig1 8 1 5 1', 'dig2 3 6'],
    },
    {
        params: [['a1 9 2 3 1', 'g1 act car', 'zo4 4 7', 'ab1 off key dog', 'a8 act zoo']],
        result: ['g1 act car', 'a8 act zoo', 'ab1 off key dog', 'a1 9 2 3 1', 'zo4 4 7'],
    },
    {
        params: [['a1 9 2 3 1', 'g1 act car', 'zo4 4 7', 'ab1 off key dog', 'a8 act zoo', 'a2 act car']],
        result: ['a2 act car', 'g1 act car', 'a8 act zoo', 'ab1 off key dog', 'a1 9 2 3 1', 'zo4 4 7'],
    },
]

normalTest(test, reorderLogFiles)
