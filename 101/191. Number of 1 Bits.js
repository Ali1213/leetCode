/* eslint-disable no-param-reassign */
/*
Write a function that takes an unsigned integer and return the number of '1' bits it has (also known as the Hamming weight).

Example 1:

Input: 00000000000000000000000000001011
Output: 3
Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.
Example 2:

Input: 00000000000000000000000010000000
Output: 1
Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.
Example 3:

Input: 11111111111111111111111111111101
Output: 31
Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.


Note:

Note that in some languages such as Java, there is no unsigned integer type. In this case, the input will be given as signed integer type and should not affect your implementation, as the internal binary representation of the integer is the same whether it is signed or unsigned.
In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3 above the input represents the signed integer -3.


Follow up:

If this function is called many times, how would you optimize it?
*/

/**
 * Runtime: 72 ms, faster than 84.24% of JavaScript online submissions for Number of 1 Bits.
 * Memory Usage: 34.9 MB, less than 40.91% of JavaScript online submissions for Number of 1 Bits.
 *
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = (n) => {
    let count = 0
    while (n > 0) {
        if (n % 2 === 1) {
            count++
            n = (n - 1) / 2
        } else {
            n /= 2
        }
    }
    return count
}

// Runtime: 64 ms, faster than 97.52% of JavaScript online submissions for Number of 1 Bits.
// Memory Usage: 42.1 MB, less than 83.64% of JavaScript online submissions for Number of 1 Bits.
const hammingWeight2 = (n) => {
    let count = 0
    while (n !== 0) {
        // eslint-disable-next-line no-bitwise
        n &= (n - 1)
        count++
    }
    return count
}

const { normalTest } = require('../test')


const tests = [
    {
        params: [00000000000000000000000000001011],
        result: 'bab',
    },
    {
        params: ['cbbd'],
        result: 'bb',
    }]

normalTest(tests, hammingWeight)
normalTest(tests, hammingWeight2)
