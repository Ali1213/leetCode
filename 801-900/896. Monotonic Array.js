// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array A is monotone increasing if for all i <= j, A[i] <= A[j].  An array A is monotone decreasing if for all i <= j, A[i] >= A[j].

// Return true if and only if the given array A is monotonic.

 

// Example 1:

// Input: [1,2,2,3]
// Output: true
// Example 2:

// Input: [6,5,4,4]
// Output: true
// Example 3:

// Input: [1,3,2]
// Output: false
// Example 4:

// Input: [1,2,4,5]
// Output: true
// Example 5:

// Input: [1,1,1]
// Output: true
 

// Note:

// 1 <= A.length <= 50000
// -100000 <= A[i] <= 100000


// beat 42.61%
/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    if( !A) return false;
    let i = 0;
    let j = A.length;
    let go;
    while(++i<j){
        if(A[i] == A[i-1]) continue;
        if(A[i] > A[i-1]){
            if(go === false) return false;
            if(go === undefined){
                go = true;   
            }
        }else{
            if(go === true) return false;
            if(go === undefined){
                go = false;   
            }  
        }
    }
    return true;
};