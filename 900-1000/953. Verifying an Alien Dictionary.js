/*
In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

    Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.



    Example 1:

Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
    Example 2:

Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
Output: false
Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
    Example 3:

Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
Output: false
Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).


Constraints:

    1 <= words.length <= 100
1 <= words[i].length <= 20
order.length == 26
All characters in words[i] and order are English lowercase letters.
*/

/**
 * Runtime: 52 ms, faster than 91.83% of JavaScript online submissions for Verifying an Alien Dictionary.
 * Memory Usage: 34.7 MB, less than 50.00% of JavaScript online submissions for Verifying an Alien Dictionary.
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
    const s = {}
    for (let i = 0; i < order.length; i++) {
        s[order[i]] = i
    }

    const lt = (A, B) => {
        let k = 0
        let m = 0
        while (k < A.length && m < B.length) {
            const v = s[A[k]] - s[B[m]]
            if (v < 0) {
                return true
            }
            if (v === 0) {
                k++
                m++
                continue
            }
            return false
        }
        return A.length <= B.length
    }

    for (let i = 1; i < words.length; i++) {
        if (!lt(words[i - 1], words[i])) return false
    }
    return true
}


const {normalTest} = require('../test/index')

const test = [
    {
        params: [['hello', 'leetcode'], 'hlabcdefgijkmnopqrstuvwxyz'],
        result: true,
    },
    {
        params: [['word', 'world', 'row'], 'worldabcefghijkmnpqstuvxyz'],
        result: false,
    },
    {
        params: [['apple', 'app'], 'abcdefghijklmnopqrstuvwxyz'],
        result: false,
    },
]

normalTest(test, isAlienSorted)
