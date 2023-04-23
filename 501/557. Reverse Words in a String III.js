/*
 Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Note: In the string, each word is separated by single space and there will not be any extra space in the string.
*/


/**
 * Runtime: 112 ms, faster than 5.02% of JavaScript online submissions for Reverse Words in a String III.
 * Memory Usage: 43.1 MB, less than 8.70% of JavaScript online submissions for Reverse Words in a String III.
 * @param {string} s
 * @return {string}
 */
const reverseString = (s) => {
    let r = '';
    for (let i = s.length - 1; i >= 0; i -= 1) {
        r += s[i];
    }
    return r;
};

const reverseWords = function (s) {
    const r = s.split(' ');

    for (let i = 0; i < r.length; i++) {
        r[i] = reverseString(r[i]);
    }

    return r.join(' ');
};

const { normalTest } = require('../test');


const tests = [{
    params: ["Let's take LeetCode contest"],
    result: "s'teL ekat edoCteeL tsetnoc",
}, {
    params: ['  '],
    result: '  ',
}];

normalTest(tests, reverseWords);
