// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

// Each number in candidates may only be used once in the combination.

// Note:

// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.
// Example 1:

// Input: candidates = [10,1,2,7,6,1,5], target = 8,
// A solution set is:
// [
//   [1, 7],
//   [1, 2, 5],
//   [2, 6],
//   [1, 1, 6]
// ]
// Example 2:

// Input: candidates = [2,5,2,1,2], target = 5,
// A solution set is:
// [
//   [1,2,2],
//   [5]
// ]

// beat 33.93%
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let sortArr = candidates.sort((a,b)=>a-b)
    let results = [];
    let dup = new Set()
    addResult([],0,0)
    
    
    return results
    function addResult(result,start,total){
        if(total>target) return
        if(total === target) {
            let str = result.join('-')
            if(!dup.has(str)){
                results.push(result.slice())
                dup.add(str)
            }
        }
        for(let i=start;i<sortArr.length;i++){
            result.push(sortArr[i])
            addResult(result,i+1,total+sortArr[i])
            result.pop()
        }
    }
};


// beat 90.81%
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let sortArr = candidates.sort((a,b)=>a-b)
    let results = [];
    addResult([],0,0)
    
    
    return results
    function addResult(result,start,total){
        if(total>target) return
        if(total === target) {
                results.push(result.slice())
        }
        for(let i=start;i<sortArr.length;i++){
            if(i>start && sortArr[i] === sortArr[i-1]) continue
            result.push(sortArr[i])
            addResult(result,i+1,total+sortArr[i])
            result.pop()
        }
    }
};