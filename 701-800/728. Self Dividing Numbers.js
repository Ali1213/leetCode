/*
A self-dividing number is a number that is divisible by every digit it contains.

    For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

Also, a self-dividing number is not allowed to contain the digit zero.

    Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

    Example 1:
Input:
    left = 1, right = 22
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
Note:

    The boundaries of each input argument are 1 <= left <= right <= 10000.
*/


/**
 * Runtime: 64 ms, faster than 56.08% of JavaScript online submissions for Self Dividing Numbers.
 * Memory Usage: 34.3 MB, less than 100.00% of JavaScript online submissions for Self Dividing Numbers.
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const selfDividingNumbers = function (left, right) {
    const result = []
    while (left <= right) {
        let v = left

        while (v > 0) {
            const num = v % 10
            if (left % num !== 0) break
            v = (v - num) / 10
        }
        if (v === 0) result.push(left)

        left += 1
    }
    return result
}


const { normalTest } = require('../test/index')

const test = [
    {
        params: [1, 22],
        result: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22],
    },
]

normalTest(test, selfDividingNumbers)
