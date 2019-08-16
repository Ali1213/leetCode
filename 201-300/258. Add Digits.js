/*
Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

    Example:

Input: 38
Output: 2
Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2.
Since 2 has only one digit, return it.
    Follow up:
    Could you do it without any loop/recursion in O(1) runtime?
*/


/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    return 1+ (num-1) %9
};






const assert = require('assert');
var test = [
    [38, 2],
];


test.forEach(([A, r], index) => {
    try {

        assert.deepEqual(addDigits(A), r)
    } catch (e) {
        console.log(`${index} occur error`);
        console.log(e)
        throw e;
    }
});
