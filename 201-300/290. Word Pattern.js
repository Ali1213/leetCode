/*
Given a pattern and a string str, find if str follows the same pattern.

    Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

    Example 1:

Input: pattern = "abba", str = "dog cat cat dog"
Output: true
Example 2:

Input:pattern = "abba", str = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", str = "dog cat cat dog"
Output: false
Example 4:

Input: pattern = "abba", str = "dog dog dog dog"
Output: false
Notes:
    You may assume pattern contains only lowercase letters, and str contains lowercase letters that may be separated by a single space
*/

/**
 * Runtime: 56 ms, faster than 46.02% of JavaScript online submissions for Word Pattern.
 * Memory Usage: 33.8 MB, less than 54.55% of JavaScript online submissions for Word Pattern.
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
// var wordPattern = function (pattern, str) {
//     let arr = new Array();
//     let pos = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === ' ') {
//             arr.push(str.substring(pos, i))
//             pos = i + 1;
//         }
//     }
//     if(str.substring(pos) !== ' ') {
//         arr.push(str.substring(pos));
//     }
//
//     if(arr.length !== pattern.length) return false;
//     let map = new Map();
//     let set = new Set();
//     for(let i =0; i< pattern.length; i++){
//         let v = map.get(pattern[i])
//         if(!v){
//             map.set(pattern[i], arr[i]);
//             if(set.has(arr[i])) return false;
//             set.add(arr[i])
//         }else {
//             if(v !== arr[i]) return false;
//         }
//     }
//     return true;
// };

/*
* Runtime: 56 ms, faster than 46.02% of JavaScript online submissions for Word Pattern.
Memory Usage: 33.8 MB, less than 45.45% of JavaScript online submissions for Word Pattern.
* */
var wordPattern = function (pattern, str) {
    var map = new Map();
    let pos = 0;
    let set= new Set()
    for(let i = 0; i< pattern.length; i++){
        let next = str.indexOf(' ', pos + 1);
        if(!map.has(pattern[i])){
            let srt = str.substring(pos, next > -1 ? next : undefined)
            map.set(pattern[i], srt);
            if(set.has(srt)) return  false;
            set.add(srt);
        }
        pos = next + 1;
    }
    let arr = new Array(pattern.length)
    for(let i = 0; i< pattern.length; i++){
        arr[i] = map.get(pattern[i]);
    }

    let s = arr.join(' ');
    return str === s;

};


const assert = require('assert');
var test = [
    ['abba', "dog cat cat dog", true],
    ['abba', "dog cat cat fish", false],
    ['aaaa', "dog cat cat dog", false],
    ['abba', "dog dog dog dog", false],
    ['abc', "b c a", true],
];


test.forEach(([A,B, r], index) => {
    try {

        assert.deepEqual(wordPattern(A,B), r)
    } catch (e) {
        console.log(`${index} occur error`);
        console.log(e)
        throw e;
    }
});

