/*
We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

    Every time you guess wrong, I'll tell you whether the number is higher or lower.

You call a pre-defined API guess(int num) which returns 3 possible results (-1, 1, or 0):

-1 : My number is lower
1 : My number is higher
0 : Congrats! You got it!
    Example :

Input: n = 10, pick = 6
Output: 6
*/

// 没有JavaScript语言
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

//  Runtime: 87 ms, faster than 64.03% of JavaScript online submissions for Guess Number Higher or Lower.
// Memory Usage: 42 MB, less than 41.01% of JavaScript online submissions for Guess Number Higher or Lower.
/**
 * @param {number} n
 * @return {number}
 */var guessNumber = function (n) {
    let start = 1;
    let end = n;
    while (start <= end) {
        let gus = Math.floor(start/2 + end/2)
        const result = guess(gus)
        if(result == 0) return gus
        if(result == 1){
            start = gus + 1
        } else {
            end = gus - 1
        }
    }
    return -1 
};