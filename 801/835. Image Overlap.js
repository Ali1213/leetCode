/* Two images A and B are given, represented as binary, square matrices of the same size.  (A binary matrix has only 0s and 1s as values.)

We translate one image however we choose (sliding it left, right, up, or down any number of units), and place it on top of the other image.  After, the overlap of this translation is the number of positions that have a 1 in both images.

(Note also that a translation does not include any kind of rotation.)

What is the largest possible overlap?

Example 1:

Input: A = [[1,1,0],
            [0,1,0],
            [0,1,0]]
       B = [[0,0,0],
            [0,1,1],
            [0,0,1]]
Output: 3
Explanation: We slide A to right by 1 unit and down by 1 unit.
Notes: 

1 <= A.length = A[0].length = B.length = B[0].length <= 30
0 <= A[i][j], B[i][j] <= 1 */


// beat 27.27% 372ms
/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number}
 */
var largestOverlap = function(A, B) {
    
    let rn = A.length
    let n = rn * rn;
    
    let a = []
    let b = []
    for(let i= 0; i< n; i++){
        if(A[Math.floor(i/rn)][i%rn] === 1){
            a.push(Math.floor(i/rn)*100 + i%rn);
        }
    }
    for(let i= 0; i< n; i++){
        if(B[Math.floor(i/rn)][i%rn] === 1){
            b.push(Math.floor(i/rn)*100 + i%rn);
        }
    }
    let count = {}
    for(let i= 0; i< a.length;i++){
        for(let j= 0; j< b.length;j++){
            let v = a[i] - b[j]
            count[v] = count[v] ? count[v] + 1 : 1
        }
    }
    let total = 0
    Object.values(count).forEach(v =>{
        total = Math.max(v,total)
    })
    return total;
};




// beat 27.27% 252ms
/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number}
 */
var largestOverlap = function(A, B) {
    
    let rn = A.length
    let n = rn * rn;
    
    let a = []
    let b = []
    for(let i= 0; i< n; i++){
        if(A[Math.floor(i/rn)][i%rn] === 1){
            a.push(Math.floor(i/rn)*100 + i%rn);
        }
    }
    for(let i= 0; i< n; i++){
        if(B[Math.floor(i/rn)][i%rn] === 1){
            b.push(Math.floor(i/rn)*100 + i%rn);
        }
    }
    let count = {}
    
    let total = 0
    for(let i= 0; i< a.length;i++){
        for(let j= 0; j< b.length;j++){
            let v = a[i] - b[j]
            count[v] = count[v] ? count[v] + 1 : 1
            if(count[v]>total) total = count[v]
        }
    }
    return total
};