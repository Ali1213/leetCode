/*
We are given two sentences A and B.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

    Return a list of all uncommon words.

    You may return the list in any order.



    Example 1:

Input: A = "this apple is sweet", B = "this apple is sour"
Output: ["sweet","sour"]
Example 2:

Input: A = "apple apple", B = "banana"
Output: ["banana"]


Note:

    0 <= A.length <= 200
0 <= B.length <= 200
A and B both contain only spaces and lowercase letters.
*/


/**
 * Runtime: 56 ms, faster than 65.97% of JavaScript online submissions for Uncommon Words from Two Sentences.
 Memory Usage: 34 MB, less than 100.00% of JavaScript online submissions for Uncommon Words from Two Sentences.
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function (A, B) {
    const x = {}
    const getword = (a) => {
        for (let i = 0; i < a.length; i++) {
            if(x[a[i]]){
                x[a[i]] += 1
            } else{
                x[a[i]] = 1
            }
        }
    }
    getword(A.split(' '))
    getword(B.split(' '))
    return Object.keys(x).filter(i => x[i] === 1)
}


const {resultArrEqual} = require('../test/index')

const test = [
    {
        params: ['this apple is sweet', 'this apple is sour'],
        result: ['sweet', 'sour'],
    },
    {
        params: ['apple apple', 'banana'],
        result: ['banana'],
    },
    {
        params: ['s z z z s', 's z ejt'],
        result: ['ejt'],
    },
]

resultArrEqual(test, uncommonFromSentences)
