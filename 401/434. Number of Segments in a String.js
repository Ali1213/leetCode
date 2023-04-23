/*
 Count the number of segments in a string, where a segment is defined to be a contiguous sequence of non-space characters.

Please note that the string does not contain any non-printable characters.

Example:

Input: "Hello, my name is John"
Output: 5 
*/

/**
 * Runtime: 56 ms, faster than 56.63% of JavaScript online submissions for Number of Segments in a String.
 * Memory Usage: 34 MB, less than 7.69% of JavaScript online submissions for Number of Segments in a String.
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
    let v = s.trim()
    return v === "" ? 0 : v.split(/\s+/g).length
};



const assert = require('assert')
var test = [
    ["Hello, my name is John", 5],
    ["    ", 0],
    ["    a", 1],
]


test.forEach(([A, r], index) => {
    try {
        assert.deepEqual(countSegments(A), r)
    } catch (e) {
        console.log(`${index} occur error`)
        console.log(e)
        throw e
    }
})




/**
 * Runtime: 56 ms, faster than 56.63% of JavaScript online submissions for Number of Segments in a String.
 * Memory Usage: 34 MB, less than 15.38% of JavaScript online submissions for Number of Segments in a String.
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
    let count = 0;
    let has = false;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === " ") {
            if (has) {
                has = false
                count += 1;
            }
        } else {
            has = true
        }
    }
    return count + Number(has)
};


var test = [
    ["Hello, my name is John", 5],
    ["    ", 0],
    ["    a", 1],
]


test.forEach(([A, r], index) => {
    try {
        assert.deepEqual(countSegments(A), r)
    } catch (e) {
        console.log(`${index} occur error`)
        console.log(e)
        throw e
    }
})