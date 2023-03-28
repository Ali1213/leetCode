/* The gray code is a binary numeral system where two successive values differ in only one bit.

Given a non-negative integer n representing the total number of bits in the code, print the sequence of gray code. A gray code sequence must begin with 0.

Example 1:

Input: 2
Output: [0,1,3,2]
Explanation:
00 - 0
01 - 1
11 - 3
10 - 2

For a given n, a gray code sequence may not be uniquely defined.
For example, [0,2,3,1] is also a valid gray code sequence.

00 - 0
10 - 2
11 - 3
01 - 1
Example 2:

Input: 0
Output: [0]
Explanation: We define the gray code sequence to begin with 0.
             A gray code sequence of n has size = 2n, which for n = 0 the size is 20 = 1.
             Therefore, for n = 0 the gray code sequence is [0]. 
*/


// 000 0
// 001 1    1
// 011 3    2
// 010 2    1
// 110 6    3
// 111 7    1
// 101 5    2
// 100 4    1

// 0000
// 0001     1
// 0011     2
// 0010     1
// 0110     3
// 0100     2
// 0101     1

// 1100     4
// 1000     3
// 1001     1
// 1011     2
// 1010     1
// 1110     3
// 1111     1

/**
 * Runtime: 72 ms, faster than 65.48% of JavaScript online submissions for Gray Code.
 * Memory Usage: 36.3 MB, less than 25.00% of JavaScript online submissions for Gray Code.
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
    let result = [0]

    for (let i = 0; i < n; i++) {
        let max = 1 << i
        for (let j = result.length - 1; j >= 0; j--) {
            result.push(result[j] | max)
        }
    }
    return result
};