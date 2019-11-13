/*
You are given a string representing an attendance record for a student. The record only contains the following three characters:
'A' : Absent.
'L' : Late.
'P' : Present.
A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).

You need to return whether the student could be rewarded according to his attendance record.

Example 1:
Input: "PPALLP"
Output: True
Example 2:
Input: "PPALLL"
Output: False
*/
/**
 * Runtime: 68 ms, faster than 10.25% of JavaScript online submissions for Student Attendance Record I.
 * Memory Usage: 33.7 MB, less than 100.00% of JavaScript online submissions for Student Attendance Record I.
 * @param {string} s
 * @return {boolean}
 */
const checkRecord2 = function (s) {
    let a_count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'A') {
            a_count += 1;
            if (a_count > 1) return false;
        } else if (s[i] === 'L') {
            if (s.substring(i, i + 3) === 'LLL') return false;
        }
    }
    return true;
};


/** Runtime: 60 ms, faster than 34.22% of JavaScript online submissions for Student Attendance Record I.
Memory Usage: 33.7 MB, less than 100.00% of JavaScript online submissions for Student Attendance Record I.
 * @param {string} s
 * @return {boolean}
 */
const checkRecord = function (s) {
    let a_count = 0;
    let later = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'A') {
            a_count += 1;
            later = 0;
            if (a_count > 1) return false;
        } else if (s[i] === 'L') {
            later += 1;
            if (later > 2) return false;
        } else {
            later = 0;
        }
    }
    return true;
};

const { normalTest } = require('../test');


const tests = [{
    params: ['PPALLP'],
    result: true,
}, {
    params: ['PPALLL'],
    result: false,
}, {
    params: ['LALL'],
    result: true,
}];

normalTest(tests, checkRecord);
