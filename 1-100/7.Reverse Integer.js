/*
Given a 32-bit signed integer, reverse digits of an integer.

    Example 1:

Input: 123
Output:  321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
    Assume we are dealing with an environment which could only hold integers within the 32-bit signed integer range. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/

var method1 = function(x) {
    let isNegative;

    if(x < 0){
        isNegative = true;
        x = 0 - x;
    }

    let ans = (x+'').split('').reverse().join('');

    x = isNegative ? 0 - ans : parseInt(ans,10);

    return x > 2147483647 || x < -2147483648 ? 0 : x ;
};