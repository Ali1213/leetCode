// A 3 x 3 magic square is a 3 x 3 grid filled with distinct numbers from 1 to 9 such that each row, column, and both diagonals all have the same sum.

// Given an grid of integers, how many 3 x 3 "magic square" subgrids are there?  (Each subgrid is contiguous).

 

// Example 1:

// Input: [[4,3,8,4],
//         [9,5,1,9],
//         [2,7,6,2]]
// Output: 1
// Explanation: 
// The following subgrid is a 3 x 3 magic square:
// 438
// 951
// 276

// while this one is not:
// 384
// 519
// 762

// In total, there is only one magic square inside the given grid.
// Note:

// 1 <= grid.length <= 10
// 1 <= grid[0].length <= 10
// 0 <= grid[i][j] <= 15

// beat 77.59%
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    
    let m = grid.length;
    let n = grid[0].length;
    let total = 0
    if(m<3 || n <3) return total
    
    const checkDiagonal = (i,j) => {
        let S = 15 - grid[i][j]
        // 斜着
        let v = grid[i-1][j-1] + grid[i+1][j+1]
        if(v !== S ) return false
        v =  grid[i+1][j-1] + grid[i-1][j+1]
        if(v !== S ) return false
        // 行
        v =  grid[i-1][j-1] + grid[i-1][j+1] + grid[i-1][j]
        if(v !== 15 ) return false
        v =  grid[i][j-1] + grid[i][j+1]
        if(v !== S ) return false
        v =  grid[i+1][j-1] + grid[i+1][j+1] + grid[i+1][j]
        if(v !== 15 ) return false
        // 列
        v =  grid[i-1][j-1] + grid[i+1][j-1] + grid[i][j-1]
        if(v !== 15 ) return false
        v =  grid[i-1][j] + grid[i+1][j]
        if(v !== S ) return false
        v =  grid[i-1][j+1] + grid[i+1][j+1] + grid[i][j+1]
        if(v !== 15 ) return false
        return true
    }
    
    const checkDistinctNumber = (i, j) => {
        let v = new Array(9);
        let a=-1,b=-1;
        while(a<2){
            while(b<2){
                let s = grid[i+a][j+b]
                if(s<1 || s>9) return false
                
                if(v[s] === undefined){
                    v[s] = 0;
                }else return false;
                b+=1
            }
            a+=1
            b = -1
        }
        return true
    }
    for(let i = 1; i< m - 1; i++ ){
        for(let j = 1;j< n -1; j++){
            if(checkDistinctNumber(i,j) && checkDiagonal(i,j)){
                total += 1;
            }
        }
    }
    
    return total
};