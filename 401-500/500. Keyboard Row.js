/*
Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.


Example:

    Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]


Note:

    You may use one character in the keyboard more than once.
    You may assume the input string will only contain letters of alphabet.
*/


/**
 * Runtime: 52 ms, faster than 67.67% of JavaScript online submissions for Keyboard Row.
 * Memory Usage: 34 MB, less than 12.50% of JavaScript online submissions for Keyboard Row.
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = function (words) {
    const up = {
        Q: 1,
        W: 1,
        E: 1,
        R: 1,
        T: 1,
        Y: 1,
        U: 1,
        I: 1,
        O: 1,
        P: 1,
        q: 1,
        w: 1,
        e: 1,
        r: 1,
        t: 1,
        y: 1,
        u: 1,
        i: 1,
        o: 1,
        p: 1,
        A: 2,
        S: 2,
        D: 2,
        F: 2,
        G: 2,
        H: 2,
        J: 2,
        K: 2,
        L: 2,
        a: 2,
        s: 2,
        d: 2,
        f: 2,
        g: 2,
        h: 2,
        j: 2,
        k: 2,
        l: 2,
        Z: 3,
        X: 3,
        C: 3,
        V: 3,
        B: 3,
        N: 3,
        M: 3,
        z: 3,
        x: 3,
        c: 3,
        v: 3,
        b: 3,
        n: 3,
        m: 3,
    };

    const r = [];
    for (let i = 0; i < words.length; i += 1) {
        let first = up[words[i][0]];
        for (let j = 1; j < words[i].length; j += 1) {
            if (first !== up[words[i][j]]) {
                first = -1;
                break;
            }
        }
        if (first > 0) r.push(words[i]);
    }
    return r;
};


const assert = require('assert');

const test = [
    [['Hello', 'Alaska', 'Dad', 'Peace'], ['Alaska', 'Dad']],
    [
        ["qz","wq","asdddafadsfa","adfadfadfdassfawde"], ["wq","asdddafadsfa"]],
];


test.forEach(([A, r], index) => {
    try {
        assert.deepEqual(findWords(A), r);
    } catch (e) {
        console.log(`${index} occur error`);
        console.log(e);
        throw e;
    }
});
