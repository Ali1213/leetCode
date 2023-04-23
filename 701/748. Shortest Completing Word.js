/*
 Find the minimum length word from a given dictionary words, which has all the letters from the string licensePlate. Such a word is said to complete the given string licensePlate

 Here, for letters we ignore case. For example, "P" on the licensePlate still matches "p" on the word.

 It is guaranteed an answer exists. If there are multiple answers, return the one that occurs first in the array.

 The license plate might have the same letter occurring multiple times. For example, given a licensePlate of "PP", the word "pair" does not complete the licensePlate, but the word "supper" does.

 Example 1:
 Input: licensePlate = "1s3 PSt", words = ["step", "steps", "stripe", "stepple"]
 Output: "steps"
 Explanation: The smallest length word that contains the letters "S", "P", "S", and "T".
 Note that the answer is not "step", because the letter "s" must occur in the word twice.
 Also note that we ignored case for the purposes of comparing whether a letter exists in the word.
 Example 2:
 Input: licensePlate = "1s3 456", words = ["looks", "pest", "stew", "show"]
 Output: "pest"
 Explanation: There are 3 smallest length words that contains the letters "s".
 We return the one that occurred first.
 Note:
 licensePlate will be a string with length in range [1, 7].
 licensePlate will contain digits, spaces, or letters (uppercase or lowercase).
 words will have a length in the range [10, 1000].
 Every words[i] will consist of lowercase letters, and have length in range [1, 15].
 */


/**
 * Runtime: 68 ms, faster than 79.31% of JavaScript online submissions for Shortest Completing Word.
 * Memory Usage: 38 MB, less than 100.00% of JavaScript online submissions for Shortest Completing Word.
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
    let dist = new Array(15);
    for (let i = 0; i < words.length; i++) {
        if (dist[words[i].length]) {
            dist[words[i].length].push(words[i]);
        } else {
            dist[words[i].length] = [words[i]];
        }
    }
    let arr = new Array(25);
    let count = 0;
    for (let i = 0; i < licensePlate.length; i++) {
        if (licensePlate.charCodeAt(i) > 64 && licensePlate.charCodeAt(i) < 91) {
            let r = licensePlate.charCodeAt(i) - 65;
            arr[r] = (arr[r] || 0) + 1;
            count += 1;
        } else if(licensePlate.charCodeAt(i) > 96 && licensePlate.charCodeAt(i) < 122){
            let r = licensePlate.charCodeAt(i) - 97;
            arr[r] = (arr[r] || 0) + 1;
            count += 1;
        }
    }
    for (let i = 0; i < 15; i++) {
        if (!dist[i]) continue;
        if (i < count) continue;
        let j = 0;
        while (j < dist[i].length) {
            let b = arr.slice();
            let c = count;
            let k = 0;
            while (k < dist[i][j].length) {
                const code = dist[i][j].charCodeAt(k) - 97;
                if (b[code]) {
                    b[code] -= 1;
                    c -= 1;
                }
                k += 1;
            }
            if (c === 0) return dist[i][j];
            j += 1;
        }
    }
};


const {normalTest} = require('../test/index');

const test = [
    {
        params: ['1s3 PSt', ['step', 'steps', 'stripe', 'stepple']],
        result: 'steps',
    },
    {
        params: ['1s3 456', ['looks', 'pest', 'stew', 'show']],
        result: 'pest',
    },
];

normalTest(test, shortestCompletingWord);
