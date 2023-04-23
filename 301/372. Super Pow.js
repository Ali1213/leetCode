// Your task is to calculate ab mod 1337 where a is a positive integer and b is an extremely large positive integer given in the form of an array.



// Example 1:

// Input: a = 2, b = [3]
// Output: 8
// Example 2:

// Input: a = 2, b = [1,0]
// Output: 1024
// Example 3:

// Input: a = 1, b = [4,3,3,8,5,2]
// Output: 1


// Constraints:

// 1 <= a <= 231 - 1
// 1 <= b.length <= 2000
// 0 <= b[i] <= 9
// b does not contain leading zeros.

// Runtime: 79 ms, faster than 95.83% of JavaScript online submissions for Super Pow.
// Memory Usage: 42.7 MB, less than 95.83% of JavaScript online submissions for Super Pow.
/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow =  (a, b) => {
    if(b.length == 0) return 1

    var last = b.pop()

    const part1 = subPow(a, last)
    const part2 = subPow(superPow(a, b), 10)
    return part1 * part2 % 1337
};

var subPow = (a, value) => {
    a %= 1337
    let res = 1
    for(let i = 0; i < value; i++){
        res *= a
        res %= 1337
    }
    return res
}


const { normalTest } = require('../test')


const tests = [
    {
        params: [2, [3]],
        result: 8,
    },
    {
        params: [2, [1,0]],
        result: 1024,
    },
    {
        params: [1, [4,3,3,8,5,2]],
        result: 1,
    },
]

normalTest(tests, superPow)
