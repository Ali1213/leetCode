/*
Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string. If there are less than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.
Example:
Input: s = "abcdefg", k = 2
Output: "bacdfeg"
Restrictions:
The string consists of lower English letters only.
Length of the given string and k will in the range [1, 10000]
*/

/**
 * Runtime: 64 ms, faster than 64.78% of JavaScript online submissions for Reverse String II.
 * Memory Usage: 36.9 MB, less than 100.00% of JavaScript online submissions for Reverse String II.
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reverse = function (arr, start, end) {
    let i = start;
    let j = end;
    while (i < j) {
        const tmp = arr[j];
        arr[j] = arr[i];
        arr[i] = tmp;
        i++;
        j--;
    }
};


const reverseStr = function (s, k) {
    const arr = s.split('');
    let i = 0;
    while (i < s.length) {
        reverse(arr, i, i + k - 1 < s.length ? i + k - 1 : s.length - 1);
        i += (k << 1);
    }
    return arr.join('');
};


const assert = require('assert');

const test = [
    ['abcdefgf', 3, 'cbadeffg'],
    ['abcdefg', 2, 'bacdfeg'],
    ['abcdefgfa', 3, 'cbadefafg'],
];


test.forEach((args, index) => {
    try {
        assert.deepEqual(reverseStr(...args.slice(0, args.length - 1)), args[args.length - 1]);
    } catch (e) {
        console.log(`${index} occur error`);
        console.log(e);
        throw e;
    }
});
