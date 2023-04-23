/*
You are given a license key represented as a string S which consists only alphanumeric character and dashes. The string is separated into N+1 groups by N dashes.

    Given a number K, we would want to reformat the strings such that each group contains exactly K characters, except for the first group which could be shorter than K, but still must contain at least one character. Furthermore, there must be a dash inserted between two groups and all lowercase letters should be converted to uppercase.

    Given a non-empty string S and a number K, format the string according to the rules described above.

    Example 1:
Input: S = "5F3Z-2e-9-w", K = 4

Output: "5F3Z-2E9W"

Explanation: The string S has been split into two parts, each part has 4 characters.
    Note that the two extra dashes are not needed and can be removed.
    Example 2:
Input: S = "2-5g-3-J", K = 2

Output: "2-5G-3J"

Explanation: The string S has been split into three parts, each part has 2 characters except the first part as it could be shorter as mentioned above.
    Note:
The length of string S will not exceed 12,000, and K is a positive integer.
    String S consists only of alphanumerical characters (a-z and/or A-Z and/or 0-9) and dashes(-).
    String S is non-empty.
*/

/**
 * Runtime: 80 ms, faster than 36.27% of JavaScript online submissions for License Key Formatting.
 * Memory Usage: 42.6 MB, less than 14.29% of JavaScript online submissions for License Key Formatting.
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
const licenseKeyFormatting1 = function (S, K) {
    const arr = [];
    let count = 0;
    for (let i = S.length - 1; i >= 0; i -= 1) {
        if (S[i] !== '-') {
            if (count === K) {
                count = 0;
                arr.push('-');
            }
            count += 1;
            arr.push(S[i].toUpperCase());
        }
    }
    return arr.reverse().join('');
};



/**
 * Runtime: 68 ms, faster than 71.80% of JavaScript online submissions for License Key Formatting.
 * Memory Usage: 41.8 MB, less than 28.57% of JavaScript online submissions for License Key Formatting.
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
const licenseKeyFormatting = function (S, K) {
    let arr = '';
    let count = 0;
    for (let i = S.length - 1; i >= 0; i -= 1) {
        if (S[i] !== '-') {
            if (count === K) {
                count = 1;
                arr = S[i].toUpperCase() + '-' + arr;
            } else {
                arr = S[i].toUpperCase() + arr;
                count += 1;
            }
        }
    }
    return arr;
};


const assert = require('assert');

const test = [
    ['5F3Z-2e-9-w', 4, '5F3Z-2E9W'],
    ['2-5g-3-J', 2, '2-5G-3J'],
];


test.forEach(([A, K, r], index) => {
    try {
        assert.deepEqual(licenseKeyFormatting(A, K), r);
    } catch (e) {
        console.log(`${index} occur error`);
        console.log(e);
        throw e;
    }
});
