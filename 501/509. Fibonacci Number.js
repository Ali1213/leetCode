/* 
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), for N > 1.
Given N, calculate F(N).

 

Example 1:

Input: 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
Example 2:

Input: 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
Example 3:

Input: 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
 

Note:

0 ≤ N ≤ 30.
 */


/**
 * Runtime: 56 ms, faster than 99.16% of JavaScript online submissions for Fibonacci Number.
 * Memory Usage: 33.8 MB, less than 50.67% of JavaScript online submissions for Fibonacci Number.
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    if(N === 0) return 0;
    if(N === 1) return 1;
    let s1 = 0;
    let s2 = 1;
    
    while(--N>0){
        let temp = s2 + s1;
        s1 = s2;
        s2 = temp;
    }
    return s2
};