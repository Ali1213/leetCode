
/*
Write a program to check whether a given number is an ugly number.

    Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.

Example 1:

Input: 6
Output: true
Explanation: 6 = 2 × 3
Example 2:

Input: 8
Output: true
Explanation: 8 = 2 × 2 × 2
Example 3:

Input: 14
Output: false
Explanation: 14 is not ugly since it includes another prime factor 7.
Note:

    1 is typically treated as an ugly number.
    Input is within the 32-bit signed integer range: [−231,  231 − 1].
*/


/**
 * Runtime: 68 ms, faster than 76.54% of JavaScript online submissions for Ugly Number.
 * Memory Usage: 35.8 MB, less than 33.33% of JavaScript online submissions for Ugly Number.
 * @param {number} num
 * @return {boolean}
 */
const isUgly = function (num) {
  if (num <= 0) return false;
  let n = num;

  while (true) {
    if (n === 1) return true;

    if (n % 2 === 0) {
      n /= 2;
    } else if (n % 3 === 0) {
      n /= 3;
    } else if (n % 5 === 0) {
      n /= 5;
    } else {
      return false;
    }
  }
};


const assert = require('assert');

const test = [
  [6, true],
  [8, true],
  [14, false],
  [-6, false],
  [1, true],
  [0, false],
];


test.forEach(([A, r], index) => {
  try {
    assert.deepEqual(isUgly(A), r);
  } catch (e) {
    console.log(`${index} occur error`);
    console.log(e);
    throw e;
  }
});
