/*
Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

    Each letter in the magazine string can only be used once in your ransom note.

    Note:
You may assume that both strings contain only lowercase letters.

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
*/
/**
 * Runtime: 88 ms, faster than 43.99% of JavaScript online submissions for Ransom Note.
 * Memory Usage: 36.9 MB, less than 100.00% of JavaScript online submissions for Ransom Note.
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function (ransomNote, magazine) {
    const c = {

    };


    for (let i = 0; i < magazine.length; i++) {
        c[magazine[i]] = c[magazine[i]] === undefined ? 1 : c[magazine[i]] + 1;
    }

    for (let i = 0; i < ransomNote.length; i++) {
        if (!c[ransomNote[i]]) return false;
        c[ransomNote[i]]--;
    }

    return true;
};


const assert = require('assert');

const test = [
    ['a', 'b', false],
    ['aa', 'ab', false],
    ['aa', 'aab', true],
    ['ab', 'aab', true],
    ['fffbfg', 'effjfggbffjdgbjjhhdegh', true],
];


test.forEach(([A, B, r], index) => {
    try {
        assert.deepEqual(canConstruct(A, B), r);
    } catch (e) {
        console.log(`${index} occur error`);
        console.log(e);
        throw e;
    }
});
