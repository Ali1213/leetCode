/*
Given a list of sorted characters letters containing only lowercase letters, and given a target letter target, find the smallest element in the list that is larger than the given target.

    Letters also wrap around. For example, if the target is target = 'z' and letters = ['a', 'b'], the answer is 'a'.

    Examples:
Input:
    letters = ["c", "f", "j"]
target = "a"
Output: "c"

Input:
    letters = ["c", "f", "j"]
target = "c"
Output: "f"

Input:
    letters = ["c", "f", "j"]
target = "d"
Output: "f"

Input:
    letters = ["c", "f", "j"]
target = "g"
Output: "j"

Input:
    letters = ["c", "f", "j"]
target = "j"
Output: "c"

Input:
    letters = ["c", "f", "j"]
target = "k"
Output: "c"
Note:
    letters has a length in range [2, 10000].
    letters consists of lowercase letters, and contains at least 2 unique letters.
    target is a lowercase letter.
    */
/**
 * Runtime: 68 ms, faster than 44.76% of JavaScript online submissions for Find Smallest Letter Greater Than Target.
 * Memory Usage: 37.9 MB, less than 16.67% of JavaScript online submissions for Find Smallest Letter Greater Than Target.
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter1 = (letters, target) => {
    for (let i = 0; i < letters.length; i++) {
        if (target.charCodeAt(0) < letters[i].charCodeAt(0)) return letters[i]
    }
    return letters[0]
}

// Runtime: 76 ms, faster than 17.14% of JavaScript online submissions for Find Smallest Letter Greater Than Target.
//     Memory Usage: 36.9 MB, less than 16.67% of JavaScript online submissions for Find Smallest Letter Greater Than Target.
var nextGreatestLetter2 = (letters, target) => {
    for (let i = 0; i < letters.length; i++) {
        if (target < letters[i]) return letters[i]
    }
    return letters[0]
}

/**
 *Runtime: 56 ms, faster than 95.24% of JavaScript online submissions for Find Smallest Letter Greater Than Target.
 Memory Usage: 36.3 MB, less than 83.33% of JavaScript online submissions for Find Smallest Letter Greater Than Target.
 *
 */
var nextGreatestLetter = (letters, target) => {
    if(target < letters[0] || target > letters[letters.length - 1]) return letters[0]

    let left  = 0;
    let right = letters.length;
    while(left < right){
        let mid = left + ((right - left) >> 2)
        if(letters[mid] <=  target){
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return letters[left % letters.length]
}

const {normalTest} = require('../test/index')

const test = [
    {
        params: [['c', 'f', 'j'], 'a'],
        result: 'c',
    },
    {
        params: [['c', 'f', 'j'], 'c'],
        result: 'f',
    },
    {
        params: [['c', 'f', 'j'], 'd'],
        result: 'f',
    },
    {
        params: [['c', 'f', 'j'], 'g'],
        result: 'j',
    },
    {
        params: [['c', 'f', 'j'], 'j'],
        result: 'c',
    },
    {
        params: [['c', 'f', 'j'], 'k'],
        result: 'c',
    },
]

normalTest(test, nextGreatestLetter)
