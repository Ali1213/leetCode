/*
    Count the number of prime numbers less than a non-negative number, n.

        Example:

    Input: 10
    Output: 4
    Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
*/


/**
 * Runtime: 856 ms, faster than 5.87% of JavaScript online submissions for Count Primes.
 * Memory Usage: 44.4 MB, less than 86.67% of JavaScript online submissions for Count Primes.
 * @param {number} n
 * @return {number}
 */
//
//
// const isPlain = (x) => {
//     if (x < 4) return true;
//     if (x % 6 === 1 || x % 6 === 5) {
//         for (let i = 2; i <= Math.sqrt(x); i++) {
//             if (x % i === 0) return false
//         }
//         return true
//     }
//     ;
//     return false
// }
//
// var countPrimes = function (n) {
//     let count = 0;
//     let set = new Set()
//     for (let i = 2; i < n; i++) {
//         if (!set.has(i) && isPlain(i)) {
//             count += 1;
//             let c = 2;
//             let j = i * c;
//             while (j < n) {
//                 set.add(j);
//                 c += 1;
//                 j = j * c;
//             }
//         }
//     }
//     return count;
// };

/**
 * Runtime: 88 ms, faster than 95.51% of JavaScript online submissions for Count Primes.
 * Memory Usage: 58 MB, less than 73.33% of JavaScript online submissions for Count Primes.
 *
 *
 */
var countPrimes = function (n) {
    if (n < 3) return 0;
    let nums = new Array(n);

    let count = 0
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] === true) continue
        count++;
        let j = 2;
        let k = j * i;
        while (k < n) {
            nums[k] = true;
            j++;
            k = j * i;
        }
    }
    return count
};


const assert = require('assert');
var test = [
    [10, 4],
    [2, 0],
    [499979, 41537],
];


test.forEach(([A, r], index) => {
    try {

        assert.deepEqual(countPrimes(A), r)
    } catch (e) {
        console.log(`${index} occur error`);
        console.log(e)
        throw e;
    }
});
