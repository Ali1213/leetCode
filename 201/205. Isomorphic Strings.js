/*

Given two strings s and t, determine if they are isomorphic.

    Two strings are isomorphic if the characters in s can be replaced to get t.

    All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

    Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true
Note:
    You may assume both s and t have the same length.
*/


/**
 * Runtime: 72 ms, faster than 46.24% of JavaScript online submissions for Isomorphic Strings.
 * Memory Usage: 36.4 MB, less than 49.48% of JavaScript online submissions for Isomorphic Strings.
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {

    let sm = new Map();
    let tm = new Map();
    for (let i = 0; i < s.length; i++) {
        if (sm.has(s[i])) {
            if (sm.get(s[i]) !== t[i]) return false
        } else {
            sm.set(s[i], t[i])
        }
        if (tm.has(t[i])) {
            if (tm.get(t[i]) !== s[i]) return false
        } else {
            tm.set(t[i], s[i])
        }

    }
    return true
};


var assert = require("assert");
var test = [
    ["egg", "add", true],
    ["foo", "bar", false],
    ["paper", "title", true],
    ["egg", "egg", true],
];


test.forEach(([A, B, r], index) => {
    try {
        assert.deepEqual(isIsomorphic(A, B), r);

    } catch (e) {
        console.log(`===第${index + 1}===eccour error================`);
        console.log(`===${JSON.stringify(A)}===eccour error================`);
        throw e
    }
});


/**
 *
 * 明显速度不可能变慢啊，我的天
 * Runtime: 84 ms, faster than 18.60% of JavaScript online submissions for Isomorphic Strings.
 * Memory Usage: 36.4 MB, less than 49.48% of JavaScript online submissions for Isomorphic Strings.
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {

    let sm = new Map();
    let tm = new Map();
    for (let i = 0; i < s.length; i++) {
        if (sm.has(s[i])) {
            if (sm.get(s[i]) !== t[i]) return false;
        } else if (tm.has(t[i])) {
            if (tm.get(t[i]) !== s[i]) return false;
        } else {
            sm.set(s[i], t[i]);
            tm.set(t[i], s[i]);
        }

    }
    return true
};


var test = [
    ["egg", "add", true],
    ["foo", "bar", false],
    ["paper", "title", true],
    ["pacer", "title", false],
    ["egg", "egg", true],
];


test.forEach(([A, B, r], index) => {
    try {
        assert.deepEqual(isIsomorphic(A, B), r);

    } catch (e) {
        console.log(`===第${index + 1}===eccour error================`);
        console.log(`===${JSON.stringify(A)}===eccour error================`);
        throw e
    }
});


/**
 *
 * Runtime: 72 ms, faster than 46.24% of JavaScript online submissions for Isomorphic Strings.
 * Memory Usage: 35.2 MB, less than 93.68% of JavaScript online submissions for Isomorphic Strings.
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {

    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i], i+1) !== t.indexOf(t[i], i+1)) return false
    }
    return true
};


var test = [
    ["egg", "add", true],
    ["foo", "bar", false],
    ["paper", "title", true],
    ["pacer", "title", false],
    ["egg", "egg", true],
];


test.forEach(([A, B, r], index) => {
    try {
        assert.deepEqual(isIsomorphic(A, B), r);

    } catch (e) {
        console.log(`===第${index + 1}===eccour error================`);
        console.log(`===${JSON.stringify(A)}===eccour error================`);
        throw e
    }
});