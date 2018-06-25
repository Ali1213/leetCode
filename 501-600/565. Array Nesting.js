// A zero-indexed array A of length N contains all integers from 0 to N-1. Find and return the longest length of set S, where S[i] = {A[i], A[A[i]], A[A[A[i]]], ... } subjected to the rule below.

// Suppose the first element in S starts with the selection of element A[i] of index = i, the next element in S should be A[A[i]], and then A[A[A[i]]]… By that analogy, we stop adding right before a duplicate element occurs in S.

// Example 1:
// Input: A = [5,4,0,3,1,6,2]
// Output: 4
// Explanation: 
// A[0] = 5, A[1] = 4, A[2] = 0, A[3] = 3, A[4] = 1, A[5] = 6, A[6] = 2.

// One of the longest S[K]:
// S[0] = {A[0], A[5], A[6], A[2]} = {5, 6, 2, 0}
// Note:
// N is an integer within the range [1, 20,000].
// The elements of A are all distinct.
// Each element of A is an integer within the range [0, N-1].



// beat 62.74%
/* 
 * 思路： 链式查找，为了避免多次查找同一个，用数组记录
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function (nums) {
    let n = nums.length;
    let ranges = new Array(n).fill(0)

    for (let i = 0; i < nums.length; i++) {

        if (ranges[i] !== 0) continue;

        let set = new Set([i]);
        let pos = nums[i];
        let row = [i];
        while (true) {
            if (ranges[pos] > 0) {
                let pV = ranges[pos] + 1
                while (row.length > 0) {
                    let pI = row.pop()
                    ranges[pI] = pV
                    pV++
                }
                break;

            }

            if (set.has(pos)) {
                let pV = 1;
                while (row.length > 0) {
                    let pI = row.pop()
                    ranges[pI] = pV
                    pV++
                }
                break;

            }
            set.add(pos)
            row.push(pos)
            pos = nums[pos]
        }
    }
    let max = 0;
    for (let i = 0; i < ranges.length; i++) {
        if (ranges[i] > max) max = ranges[i]
    }
    return max;
};



/* 
 * 思路2： 我只需要找最长的那个就可以了
 * 1.只要我走过的路，标记为负数，以后不用查找
 * 2.
 * 
*/

// beat 98.04%


/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
    let n = nums.length;
    let map = new Map();
    let max = 0
    for(let i = 0; i<nums.length; i++){
        
        if(nums[i] < 0) continue;
        
        let pos = nums[i];
        let count = 1;
        nums[i] = -1;
        let start = i;
        while(pos != start && nums[pos]>=0){
            count++;
            start = pos;
            pos = nums[start];
            nums[start] = -1;
        }
        let v = map.get(pos)
        if(v){
            count += v
        }
        map.set(i,count)
        if(count>max) max = count;
        
    
    }
    return max;
};