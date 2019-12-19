/*
Give a string s, count the number of non-empty (contiguous) substrings that have the same number of 0's and 1's, and all the 0's and all the 1's in these substrings are grouped consecutively.

    Substrings that occur multiple times are counted the number of times they occur.

    Example 1:
Input: "00110011"
Output: 6
Explanation: There are 6 substrings that have equal number of consecutive 1's and 0's: "0011", "01", "1100", "10", "0011", and "01".

    Notice that some of these substrings repeat and are counted the number of times they occur.

    Also, "00110011" is not a valid substring because all the 0's (and 1's) are not grouped together.
    Example 2:
Input: "10101"
Output: 4
Explanation: There are 4 substrings: "10", "01", "10", "01" that have equal number of consecutive 1's and 0's.
    Note:

s.length will be between 1 and 50,000.
    s will only consist of "0" or "1" characters.
*/

/**
 * Runtime: 76 ms, faster than 57.45% of JavaScript online submissions for Count Binary Substrings.
 * Memory Usage: 37.8 MB, less than 100.00% of JavaScript online submissions for Count Binary Substrings.
 * @param {string} s
 * @return {number}
 */
const countBinarySubstrings = function (s) {
    let prevLen = 0; let curLen = 1; let res = 0
    for (let i = 1; i < s.length; i++) {
        if(s[i] === s[i-1]){
            curLen += 1
        }else {
            prevLen = curLen;
            curLen = 1;
        }

        if(prevLen >= curLen) res +=1;
    }
    return res;
};


const { normalTest } = require('../test/index');

const test = [
    {
        params: ['00110011'],
        result: 6,
    },
    {
        params: ['10101'],
        result: 4,
    },
];

normalTest(test, countBinarySubstrings);
