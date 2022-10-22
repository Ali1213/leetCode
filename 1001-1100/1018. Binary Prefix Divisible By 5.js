/* Given an array A of 0s and 1s, consider N_i: the i-th subarray from A[0] to A[i] interpreted as a binary number (from most-significant-bit to least-significant-bit.)

Return a list of booleans answer, where answer[i] is true if and only if N_i is divisible by 5.

Example 1:

Input: [0,1,1]
Output: [true,false,false]
Explanation: 
The input numbers in binary are 0, 01, 011; which are 0, 1, and 3 in base-10.  Only the first number is divisible by 5, so answer[0] is true.
Example 2:

Input: [1,1,1]
Output: [false,false,false]
Example 3:

Input: [0,1,1,1,1,1]
Output: [true,false,false,false,true,false]
Example 4:

Input: [1,1,1,0,1]
Output: [false,false,false,false,false] 
*/

/**
 * Runtime: 64 ms, faster than 100.00% of JavaScript online submissions for Binary Prefix Divisible By 5.
 * Memory Usage: 38.6 MB, less than 18.18% of JavaScript online submissions for Binary Prefix Divisible By 5.
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (A) {
    if (A == null) return A;
    const r = new Array(A.length)
    let total = 0
    for (let i = 0; i < A.length; i++) {
        total = ((total << 1) + A[i]) % 5
        r[i] = total === 0
    }
    return r
};

console.log(prefixesDivBy5([0, 1, 1]))
console.log(prefixesDivBy5([0, 1, 1, 1, 1, 1]))
console.log(prefixesDivBy5([1, 1, 1, 0, 1]))
console.log(prefixesDivBy5([1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1]))


    `
func prefixesDivBy5(A []int) []bool {
    var r []bool
    
    if len(A) == 0 {
        return r
    }
    
    
    var total int64
    
    
    for _,v := range A {
        total = (total * 2 + int64(v))%5
        
        r = append(r, total == 0)
    }
    return r
}
`