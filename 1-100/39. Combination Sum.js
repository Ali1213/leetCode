// Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

// The same repeated number may be chosen from candidates unlimited number of times.

// Note:

// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.
// Example 1:

// Input: candidates = [2,3,6,7], target = 7,
// A solution set is:
// [
//   [7],
//   [2,2,3]
// ]
// Example 2:

// Input: candidates = [2,3,5], target = 8,
// A solution set is:
// [
//   [2,2,2,2],
//   [2,3,3],
//   [3,5]
// ]

// beat 100%
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */


const sum = (candidates, pos , result, collection, total, target) => {
    if( total > target ) return
    if( total == target) return collection.slice()
    
    for(let i = pos; i<candidates.length;i++){
        collection.push(candidates[i]);
        let n = sum(candidates, i, result, collection, total+candidates[i], target)
        if( n !== undefined ) result.push(n);
        collection.pop();
    }
}
var combinationSum = function(candidates, target) {
     if(target === 0 || candidates.length === 0) return [];
    let result = []
    sum(candidates, 0 , result, [], 0, target)
    return result
};

