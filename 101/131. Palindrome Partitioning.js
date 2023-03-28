/* eslint-disable no-param-reassign */
/* Given a string s, partition s such that every substring of the partition is a palindrome.

Return all possible palindrome partitioning of s.

Example:

Input: "aab"
Output:
[
  ["aa","b"],
  ["a","a","b"]
] */

/**
 * @param {string} s
 * @return {string[][]}
 */

/**
 * @param {string} s
 * @return {string[][]}
 */
//  Runtime
//  413 ms
//  Beats
//  68.44%
//  Memory
//  80.4 MB
//  Beats
//  65.4%
const checkIsPartition = (s, i, j) => {
    while (i <= j) {
        if (s[i] !== s[j]) {
            return false
        }
        i += 1
        j -= 1
    }
    return true
}
const partition = (s) => {
    const result = []
    if (s.length === 0) return result

    dfs(s, 0, [], result)
    return result
}

const dfs = (s, start, path, all) => {
    if (start === s.length) {
        all.push(path.slice())
        return
    }
    for (let i = start; i < s.length; i++) {
        if (checkIsPartition(s, start, i)) {
            path.push(s.substring(start, i + 1))
            dfs(s, i + 1, path, all)
            path.pop()
        }
    }
}

const { normalTest } = require('../test')


const tests = [
    {
        params: ['aab'],
        result: [
            ['aa', 'b'],
            ['a', 'a', 'b'],
        ],
    }]

normalTest(tests, partition)
