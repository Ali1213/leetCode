/* Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter. */

/**
 * Runtime: 172 ms, faster than 35.79% of JavaScript online submissions for Group Anagrams.
 * Memory Usage: 48.6 MB, less than 24.09% of JavaScript online submissions for Group Anagrams.
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const s = {};
    for(let i = 0; i < strs.length; i++){
        let str = strs[i].split('').sort().join('')
        console.log(str)
        if(s[str]){
            s[str].push(strs[i])
        } else {
            s[str] = [strs[i]]
        }
    }
    return Object.values(s)
};


const { normalTest } = require('../test')

const tests = [
    {
        params: [["eat", "tea", "tan", "ate", "nat", "bat"]],
        result: [
            ["ate","eat","tea"],
            ["nat","tan"],
            ["bat"]
          ],
    },
]

normalTest(tests, groupAnagrams)