/* 
Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

Your algorithm should run in O(n) complexity.

Example:

Input: [100, 4, 200, 1, 3, 2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4. */


// 算法复杂度o(n), 空间O(n)
// beat 87.71%
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length === 0)return 0
    let s = new Set();
    for(let i = 0; i< nums.length; i++){
        s.add(nums[i])
    }
    let store = new Set();
    let maxL = 0;
    
    s.forEach(item =>{
        if(store.has(item)) return;
        let c = 1;
        let v = item + 1;
        while(!store.has(v) && s.has(v)){
            c++;
            store.add(v);
            v++;
        }
        v = item - 1;
        while(!store.has(v) && s.has(v)){
            c++;
            store.add(v);
            v--;
        }
        maxL = Math.max(maxL, c)
    })
    return maxL
};