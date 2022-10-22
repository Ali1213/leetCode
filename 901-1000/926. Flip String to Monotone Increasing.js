/* A string of '0's and '1's is monotone increasing if it consists of some number of '0's (possibly 0), followed by some number of '1's (also possibly 0.)

We are given a string S of '0's and '1's, and we may flip any '0' to a '1' or a '1' to a '0'.

Return the minimum number of flips to make S monotone increasing.

 

Example 1:

Input: "00110"
Output: 1
Explanation: We flip the last digit to get 00111.
Example 2:

Input: "010110"
Output: 2
Explanation: We flip to get 011111, or alternatively 000111.
Example 3:

Input: "00011000"
Output: 2
Explanation: We flip to get 00000000.
 

Note:

1 <= S.length <= 20000
S only consists of '0' and '1' characters.
 */


/* 
 * beat 100%
 *
 *  记录一下思路
 * 
 * 假设有一个字符串是 '001001'
 * 本质上是对比它与'111111','011111','001111','000111','000011','000001' 的差异 的数
 * 取最小的。
 * 朴素流的解法当然是直接去比较
 * 
 * 换个角度
 * 假设i=3 那么如果要比较该字符串与'000111'的区别
 * 其实就是i位置左边所有的1置为0，i右边所有的0置为1的数目
 */
/**
 * @param {string} S
 * @return {number}
 */
var minFlipsMonoIncr = function(S) {
    
    let n = S.length;
    let p = new Array(n)
    p[0] = 0
    for(let i = 0; i< n; i++){
        p[i+1] = p[i] + ((S[i] === '1') ? 1 : 0) 
    }
    let t = Number.MAX_SAFE_INTEGER
    for(let i = 0; i<= n; i++){
        t = Math.min(t, p[i]+n-i - p[n] + p[i])
    }
    return t
};
