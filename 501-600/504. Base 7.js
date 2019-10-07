/*
Given an integer, return its base 7 string representation.

Example 1:
Input: 100
Output: "202"
Example 2:
Input: -7
Output: "-10"
Note: The input will be in range of [-1e7, 1e7].
*/


/**
 * https://leetcode.com/problems/base-7/
 * @param {number} num
 * @return {string}
 */
const convertToBase7 = function (num) {

    let v = ''
    while(num > 0){
        const k = num % 7
        v = (num - k) / 7 + v
        num = k;
    }
};
