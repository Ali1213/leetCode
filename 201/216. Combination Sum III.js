// 216. Combination Sum III
// Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.

// Note:

// All numbers will be positive integers.
// The solution set must not contain duplicate combinations.
// Example 1:

// Input: k = 3, n = 7
// Output: [[1,2,4]]
// Example 2:

// Input: k = 3, n = 9
// Output: [[1,2,6], [1,3,5], [2,3,4]]


// beat 94.74%
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const results = [];
    def(k,n,1,results,[])
    return results
};

function def(k, n, start, results, arr){
    if(n < 0) return 
    if(n == 0 && k == 0) return results.push(arr)
    if(k <= 0) return;
    for(let i = start; i < 10; i++){
        var a = arr.slice();
        a.push(i)
        def(k-1, n-i, i+1, results, a)
    }
}


// 这样可以节约些空间
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const results = [];
    def(k,n,1,results,[])
    return results
};

function def(k, n, start, results, arr){
    if(n < 0) return 
    if(n == 0 && k == 0) return results.push(arr.slice())
    if(k <= 0) return;
    for(let i = start; i < 10; i++){
        arr.push(i)
        def(k-1, n-i, i+1, results, arr)
        arr.pop()
    }
}