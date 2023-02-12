// Given an integer n, return the number of trailing zeroes in n!.

// Note: Your solution should be in logarithmic time complexity.

// Credits:
// Special thanks to @ts for adding this problem and creating all test cases.

// beat 95.06%
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let num = 0;
    while(n>=5){
        n = n/5 >> 0;
        num += n;
    }
    return num;
};


// beat 100%
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {

    return n>=5 ? (n/5 >>0) + trailingZeroes(n/5) : 0;
};
