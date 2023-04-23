/*
Given a list of strings words representing an English Dictionary, find the longest word in words that can be built one character at a time by other words in words. If there is more than one possible answer, return the longest word with the smallest lexicographical order.

    If there is no answer, return the empty string.
    Example 1:
Input:
    words = ["w","wo","wor","worl", "world"]
Output: "world"
Explanation:
    The word "world" can be built one character at a time by "w", "wo", "wor", and "worl".
    Example 2:
Input:
    words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
Output: "apple"
Explanation:
    Both "apply" and "apple" can be built from other words in the dictionary. However, "apple" is lexicographically smaller than "apply".
    Note:

All the strings in the input will only contain lowercase letters.
    The length of words will be in the range [1, 1000].
    The length of words[i] will be in the range [1, 30].
*/


/**
 * Runtime: 72 ms, faster than 95.92% of JavaScript online submissions for Longest Word in Dictionary.
 * Memory Usage: 40.1 MB, less than 100.00% of JavaScript online submissions for Longest Word in Dictionary.
 * @param {string[]} words
 * @return {string}
 */
const longestWord = function (words) {
    const list = []
    for (let i = 0; i < words.length; i++) {
        if (!list[words[i].length - 1]) list[words[i].length - 1] = []
        list[words[i].length - 1].push(words[i])
    }
    let preSet = new Set(list[0])
    let nowSet = new Set()
    for (let i = 1; i < list.length; i++) {
        if (!Array.isArray(list[i])) break
        for (let j = 0; j < list[i].length; j++) {
            if (preSet.has(list[i][j].slice(0, -1))) {
                nowSet.add(list[i][j])
            }
        }
        if (nowSet.size === 0) {
            break
        }
        preSet = nowSet
        nowSet = new Set()
    }

    if (preSet.size === 0) return ''
    const v = [...preSet]
    let r = v[0]
    for (let i = 1; i < v.length; i++) {
        if (v[i] < r) r = v[i]
    }
    return r
}


const {normalTest} = require('../test/index')

const test = [
    {
        params: [['w', 'wo', 'wor', 'worl', 'world']],
        result: 'world',
    },
    {
        params: [['a', 'banana', 'app', 'appl', 'ap', 'apply', 'apple']],
        result: 'apple',
    },
    {
        params: [['b', 'br', 'bre', 'brea', 'break', 'breakf', 'breakfa', 'breakfas', 'breakfast', 'l', 'lu', 'lun', 'lunc', 'lunch', 'd', 'di', 'din', 'dinn', 'dinne', 'dinner']],
        result: 'breakfast',
    },
]

normalTest(test, longestWord)
