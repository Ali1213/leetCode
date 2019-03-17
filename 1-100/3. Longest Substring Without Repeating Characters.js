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