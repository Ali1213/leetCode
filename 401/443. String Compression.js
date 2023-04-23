/*
Given an array of characters, compress it in-place.

    The length after compression must always be smaller than or equal to the original array.

    Every element of the array should be a character (not int) of length 1.

After you are done modifying the input array in-place, return the new length of the array.


    Follow up:
    Could you solve it using only O(1) extra space?


    Example 1:

Input:
    ["a","a","b","b","c","c","c"]

Output:
    Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]

Explanation:
    "aa" is replaced by "a2". "bb" is replaced by "b2". "ccc" is replaced by "c3".


    Example 2:

Input:
    ["a"]

Output:
    Return 1, and the first 1 characters of the input array should be: ["a"]

Explanation:
    Nothing is replaced.


    Example 3:

Input:
    ["a","b","b","b","b","b","b","b","b","b","b","b","b"]

Output:
    Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].

    Explanation:
Since the character "a" does not repeat, it is not compressed. "bbbbbbbbbbbb" is replaced by "b12".
    Notice each digit has it's own entry in the array.


Note:

    All characters have an ASCII value in [35, 126].
1 <= len(chars) <= 1000.

*/


/**
 * Runtime: 60 ms, faster than 92.22% of JavaScript online submissions for String Compression.
 * Memory Usage: 37.6 MB, less than 12.50% of JavaScript online submissions for String Compression.
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    if (chars.length <= 1) return chars.length;
    let count = 1;
    let char = chars[0];
    let pos = 0;
    for (let i = 1; i < chars.length; i++) {
        if (chars[i] !== char) {
            chars[pos] = char;
            pos += 1;
            if (count > 1) {
                let v = String(count)
                let j = 0;
                while (j < v.length) {
                    chars[pos] = v[j];
                    pos += 1;
                    j += 1;
                }
            }
            char = chars[i];
            count = 1;
        } else {
            count += 1
        }
    }
    if (count !== 1) {
        chars[pos] = char;
        pos += 1;
        if (count > 1) {
            let v = String(count)
            let j = 0;
            while (j < v.length) {
                chars[pos] = v[j];
                pos += 1;
                j += 1;
            }
        }
    } else {
        chars[pos] = chars[chars.length - 1];
        pos += 1;
    }
    chars.length = pos
    return pos;
};


var assert = require("assert");
var test = [
    [["a", "a", "b", "b", "c", "c", "c"], ["a", "2", "b", "2", "c", "3"], 6],
    [["a"], ["a"], 1],
    [["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"], ["a", "b", "1", "2"], 4],
    [["a", "a", "b", "b", "c", "c", "d"], ["a", "2", "b", "2", "c", "2", "d"], 7],
    [["a", "a", "a", "a", "a", "b"], ["a", "5", "b"], 3],
];


test.forEach(([A, B, r], index) => {
    try {
        assert.deepEqual(compress(A), r)
        assert.deepEqual(A, B)

    } catch (e) {
        console.log(`===第${index + 1}===eccour error================`);
        console.log(`===${JSON.stringify(A)}===eccour error================`);
        throw e
    }
});

