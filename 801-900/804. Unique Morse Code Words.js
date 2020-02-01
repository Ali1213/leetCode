/*
International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.

    For convenience, the full table for the 26 letters of the English alphabet is given below:

    [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cba" can be written as "-.-..--...", (which is the concatenation "-.-." + "-..." + ".-"). We'll call such a concatenation, the transformation of a word.

Return the number of different transformations among all words we have.

    Example:
Input: words = ["gin", "zen", "gig", "msg"]
Output: 2
Explanation:
    The transformation of each word is:
    "gin" -> "--...-."
"zen" -> "--...-."
"gig" -> "--...--."
"msg" -> "--...--."

There are 2 different transformations, "--...-." and "--...--.".
    Note:

The length of words will be at most 100.
Each words[i] will have length in range [1, 12].
    words[i] will only consist of lowercase letters.
*/


/**
 * Runtime: 64 ms, faster than 53.17% of JavaScript online submissions for Unique Morse Code Words.
 * Memory Usage: 35.7 MB, less than 44.44% of JavaScript online submissions for Unique Morse Code Words.
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations1 = function (words) {
    const dict = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..']
    const set = new Set()

    for (let i = 0; i < words.length; i++) {
        let s = ''
        for (let j = 0; j < words[i].length; j++) {
            s += dict[words[i].charCodeAt(j) - 97]
        }
        set.add(s)
    }

    return set.size
}

/**
 * Runtime: 56 ms, faster than 88.25% of JavaScript online submissions for Unique Morse Code Words.
 * Memory Usage: 35.7 MB, less than 50.00% of JavaScript online submissions for Unique Morse Code Words.
 *
 */
var uniqueMorseRepresentations = function (words) {
    const dict = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..']
    const set = new Set()

    for (let i = 0; i < words.length; i++) {
        set.add(words[i].split('').map(k => dict[k.charCodeAt() - 97]).join(''))
    }

    return set.size
}


const {normalTest} = require('../test/index')

const test = [
    {
        params: [['gin', 'zen', 'gig', 'msg']],
        result: 2,
    },
]

normalTest(test, uniqueMorseRepresentations)
