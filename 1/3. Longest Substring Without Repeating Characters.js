/* 
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring. 
*/


/** 
 * 运行时间 beat 20.30%
 * 内存占用 beat 11.33%
 * 踩了两个坑
 * 1. now的位置计算, 测试用例为'aab'
 * 2. 没有去回溯计算 'dvdf'
 * 
 * 思考可以优化的地方，
 * 回溯计算的时候直接读已存值, 能够减少计算
 *
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let maxLen = 0;
    let now = 0;
    let dict = {

    }
    let i = 0;
    while (i < s.length) {
        if (dict[s[i]] !== undefined) {
            i = dict[s[i]] + 1;
            dict = {}
            maxLen = Math.max(maxLen, now);
            now = 0;
        } else {
            dict[s[i]] = i;
            i++;
            now++;
        }
    }
    maxLen = Math.max(maxLen, now);
    return maxLen;
};



/**
 * 运行时间 beat  59.00% 
 * 内存 beat  62.06%
 * 
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let maxLen = 0;
    let pos = 0;
    let dict = {

    }
    let i = 0;
    while (i < s.length) {
        if (dict[s[i]] !== undefined) {
            maxLen = Math.max(maxLen, i - pos, i - Math.max(pos, dict[s[i]]));
            pos = Math.max(dict[s[i]] + 1, pos);
        }
        dict[s[i]] = i;
        i++;
    }
    return Math.max(maxLen, i - pos);
};




/**
 * beat 97.33%
 * beat 99.59%
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let res = 0, start = 0;
    for (let i = 0; i < s.length; i++) {
        const index = s.indexOf(s[i], start);
        if (index > -1 && index < i) {
            start = index + 1;
        }
        res = Math.max(res, index - start + 1);
    }
    return res;
};




/**
 * 87.67%
 * 80.41% 
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

    let lastIndex = new Map()
    let start = 0
    let maxLen = 0

    for (let i = 0; i < s.length; i++) {
        if (lastIndex.has(s[i]) && lastIndex.get(s[i]) >= start) {
            start = lastIndex.get(s[i]) + 1
        }

        if (maxLen < i - start + 1) {
            maxLen = i - start + 1
        }

        lastIndex.set(s[i], i)
    }
    return maxLen
};