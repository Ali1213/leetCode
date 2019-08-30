/*
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

    s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.
*/


/**
 * Runtime: 76 ms, faster than 95.05% of JavaScript online submissions for First Unique Character in a String.
 * Memory Usage: 37.9 MB, less than 77.50% of JavaScript online submissions for First Unique Character in a String.
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function (s) {
    const a = new Array(26);
    for (let i = 0; i < s.length; i += 1) {
        const c = s.charCodeAt(i) - 97;
        a[c] = a[c] ? a[c] + 1 : 1;
    }

    for (let i = 0; i < s.length; i += 1) {
        if (a[s.charCodeAt(i) - 97] === 1) return i;
    }
    return -1;
};


const assert = require('assert');

const test = [
    ['leetcode', 0],
    ['loveleetcode', 2],
    ['cc', -1],
];


test.forEach(([A, r], index) => {
    try {
        assert.deepEqual(firstUniqChar(A), r);
    } catch (e) {
        console.log(`${index} occur error`);
        console.log(e);
        throw e;
    }
});
