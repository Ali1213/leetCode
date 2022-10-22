/*
Given a string S, return the "reversed" string where all characters that are not a letter stay in the same place, and all letters reverse their positions.



    Example 1:

Input: "ab-cd"
Output: "dc-ba"
Example 2:

Input: "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"
Example 3:

Input: "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"


Note:

    S.length <= 100
33 <= S[i].ASCIIcode <= 122
S doesn't contain \ or "
*/


/**
 * Runtime: 52 ms, faster than 90.91% of JavaScript online submissions for Reverse Only Letters.
 * Memory Usage: 33.9 MB, less than 75.00% of JavaScript online submissions for Reverse Only Letters.
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function (S) {
    let s = S.split('')
    let i = 0
    let j = s.length - 1
    const letter = new Set(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'])
    while (i < j) {
        while (!letter.has(s[i])) {
            i++
            if (i >= j) break
        }
        while (!letter.has(s[j])) {
            j--
            if (i >= j) break
        }
        if (i < j) {
            const temp = s[i]
            s[i] = s[j]
            s[j] = temp
        }
        i++
        j--
    }
    return s.join('')
}


const {normalTest} = require('../test')

const test = [
    {
        params: ['ab-cd'],
        result: 'dc-ba',
    },
    {
        params: ['a-bC-dEf-ghIj'],
        result: 'j-Ih-gfE-dCba',
    },
    {
        params: ['Test1ng-Leet=code-Q!'],
        result: 'Qedo1ct-eeLg=ntse-T!',
    },
    {
        params: ['7_28]'],
        result: '7_28]',
    },
    {
        params: ['UpC7ne'],
        result: 'enC7pU',
    },
]

normalTest(test, reverseOnlyLetters)
