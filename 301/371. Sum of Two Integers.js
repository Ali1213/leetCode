/* 
Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

Example 1:

Input: a = 1, b = 2
Output: 3
Example 2:

Input: a = -2, b = 3
Output: 1 
*/

/**
 * Runtime: 56 ms, faster than 95.11% of JavaScript online submissions for Sum of Two Integers.
 * Memory Usage: 33.8 MB, less than 23.08% of JavaScript online submissions for Sum of Two Integers.
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
    var sum = a;
    var carry = b;

    while (carry) {
        var tmps = sum;

        sum = tmps ^ carry;
        carry = (tmps & carry) << 1;
    }

    return sum;
};