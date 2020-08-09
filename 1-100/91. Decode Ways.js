/*
A message containing letters from A-Z is being encoded to numbers using the following mapping:

'A' -> 1
'B' -> 2
...
'Z' -> 26
Given a non-empty string containing only digits, determine the total number of ways to decode it.

Example 1:

Input: "12"
Output: 2
Explanation: It could be decoded as "AB" (1 2) or "L" (12).
Example 2:

Input: "226"
Output: 3
Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6). 
*/



/**
 * Runtime: 124 ms, faster than 30.75% of JavaScript online submissions for Decode Ways.
 * Memory Usage: 37.1 MB, less than 65.33% of JavaScript online submissions for Decode Ways.
 * @param {string} s
 * @return {number}
 */
var numDecodings = (s) => {

    var s1 = 0; s2 = 1;
    for (let i = 0; i < s.length; i++) {
        let  now = s[i] === '0' ? 0 : s2
        if (i > 0 && s.substring(i - 1, i + 1) >= '10' && s.substring(i - 1, i + 1) < '27') {
            now += s1
        }
        s1 = s2
        s2 = now;
    }
    return s2
};



const { normalTest } = require('../test')


const tests = [
    {
        params: ["12"],
        result: 2,
    },
    {
        params: ["226"],
        result: 3,
    },
    {
        params: ["12012"],
        result: 2,
    },
    {
        params: ["0"],
        result: 0,
    },
]

normalTest(tests, numDecodings)