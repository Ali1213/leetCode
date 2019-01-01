/* This question is the same as "Max Chunks to Make Sorted" except the integers of the given array are not necessarily distinct, the input array could be up to length 2000, and the elements could be up to 10**8.

Given an array arr of integers (not necessarily distinct), we split the array into some number of "chunks" (partitions), and individually sort each chunk.  After concatenating them, the result equals the sorted array.

What is the most number of chunks we could have made?

Example 1:

Input: arr = [5,4,3,2,1]
Output: 1
Explanation:
Splitting into two or more chunks will not return the required result.
For example, splitting into [5, 4], [3, 2, 1] will result in [4, 5, 1, 2, 3], which isn't sorted.
Example 2:

Input: arr = [2,1,3,4,4]
Output: 4
Explanation:
We can split into two chunks, such as [2, 1], [3, 4, 4].
However, splitting into [2, 1], [3], [4], [4] is the highest number of chunks possible.
Note:

arr will have length in range [1, 2000].
arr[i] will be an integer in range [0, 10**8]. 
*/


// beat 0.00%
// 有点难受，第一次击败0.00%
/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
    let sortArr = arr.slice().sort((a,b) => a - b);
    
    let splits = 0;
    
    let store = {}
    let start = 0;
    for(let i = 0; i< arr.length; i++){
            if(arr[i] === sortArr[i] && start === i){
                    start = i + 1;
                    splits += 1;
            } else {
                if(store[arr[i]] === undefined){
                    store[arr[i]] = 1
                } else {
                    store[arr[i]] += 1
                }
                if(store[sortArr[i]] === undefined){
                    store[sortArr[i]] =  -1
                } else {
                    store[sortArr[i]] -= 1
                }
            let s = Object.values(store);
            let iszero = true;
            let j = 0;
            while(j<s.length){
                if(s[j] !== 0){
                    iszero = false;
                    break;
                }
                j++;
            }
            if(iszero){
                splits += 1;
                store = {};
                start = i + 1;
                
            }
        }
        
    }
    
    return splits
};


// 0.00%
// shit 依然百分之零
/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
    let sortArr = arr.slice().sort((a,b) => a - b);
    
    let splits = 0;
    
    let max = 0;
    for(let i = 0; i< arr.length; i++){
        if(arr[i] === sortArr[i] && max === i){
                max = i + 1;
                splits += 1;
        } else {
            let pos = sortArr.indexOf(arr[i]);
            sortArr[pos] = -1;
            max = Math.max(pos,max);
            if(max === i) splits += 1;
        }
        
    }
    
    return splits
};



// 通过优化查找的索引，又优化了一些，但是依然beat 0.00%

/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
    let sortArr = arr.slice().sort((a,b) => a - b);
    
    let splits = 0;
    
    let max = 0;
    let start = 0;
    for(let i = 0; i< arr.length; i++){
        if(arr[i] === sortArr[i] && max === i){
                max = i + 1;
                start = max;
                splits += 1;
        } else {
            let pos = sortArr.indexOf(arr[i],start);
            sortArr[pos] = -1;
            max = Math.max(pos,max);
            if(max === i) {
                splits += 1;
                start = max;
            }
        }
        
    }
    
    return splits
};