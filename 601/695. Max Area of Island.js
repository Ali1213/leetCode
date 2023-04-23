// Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

// Example 1:
// [[0,0,1,0,0,0,0,1,0,0,0,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,1,1,0,1,0,0,0,0,0,0,0,0],
//  [0,1,0,0,1,1,0,0,1,0,1,0,0],
//  [0,1,0,0,1,1,0,0,1,1,1,0,0],
//  [0,0,0,0,0,0,0,0,0,0,1,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.
// Example 2:
// [[0,0,0,0,0,0,0,0]]
// Given the above grid, return 0.
// Note: The length of each dimension in the given grid does not exceed 50.

// beat 63.79%
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let c = grid.length, r = grid[0].length;
    let max = 0; let store = new Set(), s = [];
    for(let i = 0;i<c;i++){
        for(let j=0;j<r;j++){
            // console.log(i,j)
            if(grid[i][j] === 1){
                store.add( i + ',' + j );
                s.push([i,j]);
            }
        }
    }
    // console.log(store,s);
    for(let i =0;i<s.length;i++){
        if(store.has(s[i][0] + ',' + s[i][1])){ 
            max = Math.max(max, hasSide(s[i][0],s[i][1], store));
        }
    }
    return max;
};

var hasSide = (i,j,s) => {
    let pa = 1;
    s.delete(i+','+ j);
    if( i-1 >= 0 ){
        if(s.has(i-1+','+ j)){
            pa += hasSide(i-1,j,s);
        }
    }
    if( i+1 >= 0 ){
        if(s.has(i+1+','+ j)){
            pa += hasSide(i+1,j,s);
        }
    }
    if( j-1 >= 0 ){
        if(s.has(i+','+ (j-1))){
            pa += hasSide(i,j-1,s);
        }
    }
    if( j+1 >= 0 ){
        if(s.has(i+','+ (j+1))){
            pa += hasSide(i,j+1,s);
        }
    }
    return pa;
}


// neat 59.48%
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let c = grid.length, r = grid[0].length;
    let max = 0; let store = new Set(), s = [];
    for(let i = 0;i<c;i++){
        for(let j=0;j<r;j++){
            // console.log(i,j)
            if(grid[i][j] === 1){
                store.add( i + ',' + j );
                s.push([i,j]);
            }
        }
    }
    for(let i =0;i<s.length;i++){
        if(store.has(s[i][0] + ',' + s[i][1])){ 
            max = Math.max(max, hasSide(s[i][0],s[i][1], store));
        }
    }
    return max;
};

var hasSide = (i,j,s) => {
    if(!s.has(i+','+j)) return 0;
    s.delete(i+','+ j);
    
    return 1 + hasSide(i-1,j,s) + hasSide(i+1,j,s) + hasSide(i,j-1,s) + hasSide(i,j+1,s);

}


// beat 86.21%
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let c = grid.length, r = grid[0].length;
    let max = 0;
    
    var hasSide = (i,j) => {
        if( i>=0 && i<c && j>=0 &&j<r && grid[i][j] === 1){
            grid[i][j] = 0;
            return 1 + hasSide(i-1,j) + hasSide(i+1,j) + hasSide(i,j-1) + hasSide(i,j+1);
        }
        return 0;
    }
    for(let i = 0;i<c;i++){
        for(let j=0;j<r;j++){
            if(grid[i][j] === 1){
                max = Math.max(max, hasSide(i,j));
            }
        }
    }
    return max;
};
