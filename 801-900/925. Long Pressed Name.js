/*
Your friend is typing his name into a keyboard.  Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.

    You examine the typed characters of the keyboard.  Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed.



    Example 1:

Input: name = "alex", typed = "aaleex"
Output: true
Explanation: 'a' and 'e' in 'alex' were long pressed.
    Example 2:

Input: name = "saeed", typed = "ssaaedd"
Output: false
Explanation: 'e' must have been pressed twice, but it wasn't in the typed output.
Example 3:

Input: name = "leelee", typed = "lleeelee"
Output: true
Example 4:

Input: name = "laiden", typed = "laiden"
Output: true
Explanation: It's not necessary to long press any character.


Note:

    name.length <= 1000
typed.length <= 1000
The characters of name and typed are lowercase letters.

*/

/**
 * Runtime: 52 ms, faster than 91.57% of JavaScript online submissions for Long Pressed Name.
 * Memory Usage: 33.9 MB, less than 100.00% of JavaScript online submissions for Long Pressed Name.
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
    let i = 0
    let j = 0
    while (i < name.length && j < typed.length) {
        if (name[i] === typed[j]) {
            i++
            j++
        } else {
            if (j === 0) return false
            if (typed[j] !== name[i - 1]) {
                return false
            }
            j++
        }
    }
    while (i < name.length) return false
    while (j < typed.length) {
        if (typed[j] !== name[name.length - 1]) {
            return false
        }
        j++
    }
    return true
}


const {normalTest} = require('../test/index')

const test = [
    {
        params: ['alex', 'aaleex'],
        result: true,
    },
    {
        params: ['saeed', 'ssaaedd'],
        result: false,
    },
    {
        params: ['leelee', 'lleeelee'],
        result: true,
    },
    {
        params: ['laiden', 'laiden'],
        result: true,
    },
    {
        params: ['vtkgn', 'vttkgnn'],
        result: true,
    },
    {
        params: ['pyplrz', 'ppyypllr'],
        result: false,
    },
    {
        params: ['yyxbtsrs', 'yyyyxbbtssrs'],
        result: true,
    },
]

normalTest(test, isLongPressedName)

