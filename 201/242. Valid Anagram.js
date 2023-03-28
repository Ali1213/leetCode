/*
Given two strings s and t , write a function to determine if t is an anagram of s.

    Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
    You may assume the string contains only lowercase alphabets.

    Follow up:
    What if the inputs contain unicode characters? How would you adapt your solution to such case?

*/


/**
 * Runtime: 60 ms, faster than 95.59% of JavaScript online submissions for Valid Anagram.
 * Memory Usage: 36 MB, less than 77.55% of JavaScript online submissions for Valid Anagram.
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if(s.length !== t.length) return false
    var a = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        a[s[i].charCodeAt() - 97]++;
        a[t[i].charCodeAt() - 97]--;
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== 0) return false
    }
    return true
};


const assert = require('assert');
var test = [
    ["anagram", "nagaram", true],
    ["rat", "car", false],
    ["ab", "a", false],
];


test.forEach(([A, B, r], index) => {
    try {

        assert.deepEqual(isAnagram(A, B), r)
    } catch (e) {
        console.log(`${index} occur error`);
        console.log(e)
        throw e;
    }
});
