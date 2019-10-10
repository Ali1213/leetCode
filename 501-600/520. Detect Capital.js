/* Given a word, you need to judge whether the usage of capitals in it is right or not.

We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital, like "Google".
Otherwise, we define that this word doesn't use capitals in a right way.


Example 1:

Input: "USA"
Output: True


Example 2:

Input: "FlaG"
Output: False


Note: The input will be a non-empty word consisting of uppercase and lowercase latin letters.
*/

/**
 * Runtime: 72 ms, faster than 18.41% of JavaScript online submissions for Detect Capital.
 * Memory Usage: 34.3 MB, less than 100.00% of JavaScript online submissions for Detect Capital.
 * @param {string} word
 * @return {boolean}
 */
const detectCapitalUse = (word) => {
    // if (word.length === 0) return false;
    if (word.length < 2) return true;
    const first = word.charCodeAt(0) < 97;
    const others = word.charCodeAt(1) < 97;

    for (let i = 2; i < word.length; i += 1) {
        const v = word.charCodeAt(i) < 97;
        if (v !== others) return false;
    }
    return !(!first && others);
};


const assert = require('assert');

const test = [
    ['USA', true],
    ['FlaG', false],
    ['aBC', false],
    ['Leetcode', true],
];


test.forEach(([A, r], index) => {
    try {
        assert.deepEqual(detectCapitalUse(A), r);
    } catch (e) {
        console.log(`${index} occur error`);
        console.log(e);
        throw e;
    }
});
