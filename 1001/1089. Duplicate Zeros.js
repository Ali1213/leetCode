/* 
Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written.

Do the above modifications to the input array in place, do not return anything from your function.

 

Example 1:

Input: [1,0,2,3,0,4,5,0]
Output: null
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
Example 2:

Input: [1,2,3]
Output: null
Explanation: After calling your function, the input array is modified to: [1,2,3]
 

Note:

1 <= arr.length <= 10000
0 <= arr[i] <= 9 

*/

/**
 * Runtime: 68 ms, faster than 81.45% of JavaScript online submissions for Duplicate Zeros.
 * Memory Usage: 35.3 MB, less than 100.00% of JavaScript online submissions for Duplicate Zeros.
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
    const n = arr.slice();

    let pos = 0;
    for (let i = 0; i < arr.length; i++) {
        if (n[pos] === 0) {
            arr[i] = 0;
            i += 1;
            if (i < arr.length) {
                arr[i] = 0;
            }
        } else {
            arr[i] = n[pos]
        }
        pos += 1;

    }
    return null;
};