// An n x n grid is composed of 1 x 1 squares where each 1 x 1 square consists of a '/', '\', or blank space ' '. These characters divide the square into contiguous regions.

// Given the grid grid represented as a string array, return the number of regions.

// Note that backslash characters are escaped, so a '\' is represented as '\\'.

// Example 1:

// Input: grid = [" /","/ "]
// Output: 2
// Example 2:

// Input: grid = [" /","  "]
// Output: 1
// Example 3:

// Input: grid = ["/\\","\\/"]
// Output: 5
// Explanation: Recall that because \ characters are escaped, "\\/" refers to \/, and "/\\" refers to /\.

// Constraints:

// n == grid.length == grid[i].length
// 1 <= n <= 30
// grid[i][j] is either '/', '\', or ' '

package main
// Runtime
// 499 ms
// Beats
// 25%
// Memory
// 5.5 MB
// Beats
// 25%
func regionsBySlashes(grid []string) int {
    store := make([][]int, len(grid) * 3)
	for x, str := range grid {
		store[3*x] = make([]int, len(str)*3)
		store[3*x+1] = make([]int, len(str)*3)
		store[3*x+2] = make([]int, len(str)*3)
		for i := 0; i< len(str); i++ {
			if str[i] == '/' {
				store[3*x][i*3 + 2] = 1
				store[3*x+1][i*3 + 1] = 1
				store[3*x+2][i*3] = 1
			}else if str[i] == '\\' {
				store[3*x][i*3] = 1
				store[3*x+1][i*3 + 1] = 1
				store[3*x+2][i*3+2] = 1
				// i+=1
			}
		}
	}
	cnt := 0
	for i:=0; i< len(store); i++ {
		for j:=0; j< len(store[i]); j++ {
			if store[i][j] == 0 {
				cnt ++
				dfs(store, i, j)
			}
		}
	}
	return cnt
}

func dfs(s [][]int,i, j int){
	n := len(s)
	m := len(s[0])
	if i < 0 || i >= n || j < 0 ||  j >= m || s[i][j] == 1 {
		return
	}
	s[i][j] = 1
	dfs(s,i,j+1);
	dfs(s,i,j-1);
	dfs(s,i+1,j);
	dfs(s,i-1,j);
}

