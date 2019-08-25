/*
Write a function that takes a string as input and reverse only the vowels of a string.

    Example 1:

Input: "hello"
Output: "holle"
Example 2:

Input: "leetcode"
Output: "leotcede"
Note:
    The vowels does not include the letter "y".
*/


/**
 * Runtime: 84 ms, faster than 45.13% of JavaScript online submissions for Reverse Vowels of a String.
 * Memory Usage: 38.5 MB, less than 92.86% of JavaScript online submissions for Reverse Vowels of a String.
 * @param {string} s
 * @return {string}
 */
// const reverseVowels = function (s) {
//     var c = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
//     const arr = s.split('');
//
//     let i = 0; let
//         j = arr.length - 1;
//
//     while (i < j) {
//         if (!c.has(arr[i])) {
//             i++;
//             continue;
//         }
//
//         if (!c.has(arr[j])) {
//             j--;
//             continue;
//         }
//         if (arr[i] === arr[j]) {
//             i++;
//             j--;
//             continue;
//         }
//         const temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         i++;
//         j--;
//     }
//     return arr.join('')
// };

/*
* Runtime: 84 ms, faster than 45.13% of JavaScript online submissions for Reverse Vowels of a String.
* Memory Usage: 38.5 MB, less than 92.86% of JavaScript online submissions for Reverse Vowels of a String.
* */
const reverseVowels = function (s) {
    const c = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const arr = new Array(s.length);

    for (let i = 0; i < s.length; i++) {
        arr[i] = s[i];
    }

    let i = 0; let
        j = arr.length - 1;

    while (i < j) {
        if (!c.has(arr[i])) {
            i++;
            continue;
        }

        if (!c.has(arr[j])) {
            j--;
            continue;
        }
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    return arr.join('');
};

const assert = require('assert');

const test = [
    ['hello', 'holle'],
    ['leetcode', 'leotcede'],
];


test.forEach(([A, r], index) => {
    try {
        assert.deepEqual(reverseVowels(A), r);
    } catch (e) {
        console.log(`${index} occur error`);
        console.log(e);
        throw e;
    }
});
