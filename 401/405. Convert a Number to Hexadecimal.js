/*
Given an integer, write an algorithm to convert it to hexadecimal. For negative integer, two’s complement method is used.

    Note:

All letters in hexadecimal (a-f) must be in lowercase.
    The hexadecimal string must not contain extra leading 0s. If the number is zero, it is represented by a single zero character '0'; otherwise, the first character in the hexadecimal string will not be the zero character.
    The given number is guaranteed to fit within the range of a 32-bit signed integer.
    You must not use any method provided by the library which converts/formats the number to hex directly.
    Example 1:

Input:
    26

Output:
    "1a"
Example 2:

Input:
    -1

Output:
    "ffffffff"
*/

/**
 * Runtime: 60 ms, faster than 23.78% of JavaScript online submissions for Convert a Number to Hexadecimal.
 * Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions for Convert a Number to Hexadecimal.
 * @param {number} num
 * @return {string}
 */
const toHex1 = function (num) {
    if (num === 0) return '0';
    const index = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    let n = num;
    let r = '';
    if (num < 0) {
        n = 4294967296 + num;
    }


    while (n > 0) {
        const v = n % 16;
        n = (n - v) / 16;
        r = index[v] + r;
    }
    return r;
};


/*
* Runtime: 56 ms, faster than 53.66% of JavaScript online submissions for Convert a Number to Hexadecimal.
Memory Usage: 33.9 MB, less than 100.00% of JavaScript online submissions for Convert a Number to Hexadecimal.
* */
const toHex = function (num) {
    if (num === 0) return '0';
    const index = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    let r = '';


    while (num !== 0) {
        r = index[num & 15] + r;
        num = (num >>> 4);
    }
    return r;
};

const assert = require('assert');

const test = [
    [26, '1a'],
    [-1, 'ffffffff'],
];


test.forEach(([A, r], index) => {
    try {
        assert.deepEqual(toHex(A), r);
    } catch (e) {
        console.log(`${index} occur error`);
        console.log(e);
        throw e;
    }
});
