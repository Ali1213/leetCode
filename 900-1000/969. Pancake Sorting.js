/* 
Given an array A, we can perform a pancake flip: We choose some positive integer k <= A.length, then reverse the order of the first k elements of A.  We want to perform zero or more pancake flips (doing them one after another in succession) to sort the array A.

Return the k-values corresponding to a sequence of pancake flips that sort A.  Any valid answer that sorts the array within 10 * A.length flips will be judged as correct.

 

Example 1:

Input: [3,2,4,1]
Output: [4,2,4,3]
Explanation: 
We perform 4 pancake flips, with k values 4, 2, 4, and 3.
Starting state: A = [3, 2, 4, 1]
After 1st flip (k=4): A = [1, 4, 2, 3]
After 2nd flip (k=2): A = [4, 1, 2, 3]
After 3rd flip (k=4): A = [3, 2, 1, 4]
After 4th flip (k=3): A = [1, 2, 3, 4], which is sorted. 
Example 2:

Input: [1,2,3]
Output: []
Explanation: The input is already sorted, so there is no need to flip anything.
Note that other answers, such as [3, 3], would also be accepted.
 

Note:

1 <= A.length <= 100
A[i] is a permutation of [1, 2, ..., A.length] 
*/

/**
 * Runtime: 84 ms, faster than 28.68% of JavaScript online submissions for Pancake Sorting.
 * Memory Usage: 34.7 MB, less than 96.81% of JavaScript online submissions for Pancake Sorting.
 * @param {number[]} A
 * @return {number[]}
 */
var pancakeSort = function (A) {
    let methods = [];
    let pos = A.length;

    while (pos > 0) {
        if (A[pos - 1] == pos) {
            pos -= 1;
            continue;
        }
        let nowPos = A.indexOf(pos);

        pos -= 1;
        if (nowPos === 0) {
            methods.push(pos + 1);
            reverse(pos);
        } else {
            methods.push(nowPos + 1, pos + 1);
            reverse(nowPos);
            reverse(pos);

        }
    }
    return methods;

    function reverse(pos) {
        let p = pos / 2;
        for (let i = 0; i < p; i++) {
            let temp = A[i];
            A[i] = A[pos - i];
            A[pos - i] = temp;
        }
    }

};


console.log(pancakeSort([3, 2, 4, 1]))
// console.log(pancakeSort([1,2,3]))


var pancakeSort = function (A) {
    let methods = [];

    var reverse = (pos) => {
        let p = pos / 2;
        for (let i = 0; i < p; i++) {
            let temp = A[i];
            A[i] = A[pos - i];
            A[pos - i] = temp;
        }

    }


    for (let max = A.length; max > 0; max -= 1) {
        let i = 0;
        while (A[i] !== max && i < max) {
            i += 1;
        }

        if(i === max - 1){

        } else if ( i === 0){
            methods.push(max);
            reverse(max - 1);

        } else {
            methods.push(i + 1);
            reverse(i);
            methods.push(max);
            reverse(max - 1);
        }
    }

    return methods;

};


console.log(pancakeSort([3, 2, 4, 1]))


/**
 *
 * Runtime: 60 ms, faster than 100.00% of JavaScript online submissions for Pancake Sorting.
 * Memory Usage: 35.1 MB, less than 76.60% of JavaScript online submissions for Pancake Sorting.
 */

var pancakeSort = function (A) {
    let methods = [];

    var reverse = (pos) => {
        let p = pos / 2;
        for (let i = 0; i < p; i++) {
            let temp = A[i];
            A[i] = A[pos - i];
            A[pos - i] = temp;
        }

    }


    for (let max = A.length; max > 0; max -= 1) {
        let i = 0;
        while (A[i] !== max && i < max) {
            i += 1;
        }

        if(i === max - 1){

        } else if ( i === 0){
            methods.push(max);
            reverse(max - 1);

        } else {
            methods.push(i + 1);
            reverse(i);
            methods.push(max);
            reverse(max - 1);
        }
    }

    return methods;

};