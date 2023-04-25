package main



// Runtime
// 32 ms
// Beats
// 69.23%
// Memory
// 7.4 MB
// Beats
// 65.93%
func longestIncreasingPath(matrix [][]int) int {
	m := len(matrix)
	if m == 0 {
		return 0
	}
	n := len(matrix[0])
	store := make([][]int, m)
	for i:=0; i< m; i++ {
		store[i] = make([]int, n)
	}
	max := 1
	for i:=0; i< m; i++{
		for j:=0; j< n; j++ {
			max = Max(max, longestIncreasingPathDfs(matrix, i, j, m,n, store))
		}
	}
	return max
}


func Max(a, b int) int{
	if a > b {
		return a
	}
	return b
}

var dir = [][]int{
	[]int{1,0},
	[]int{0, 1},
	[]int{-1,0},
	[]int{0, -1},
}

func longestIncreasingPathDfs(matrix [][]int, i, j, m, n int, store [][]int) int{
	if store[i][j] != 0 {
		return store[i][j]
	}
	max := 1
	for _, v := range dir {
		x := i + v[0]
		y := j + v[1]
		if x >= 0 && x < m && y >=0 && y< n && matrix[i][j] < matrix[x][y] {
			max = Max(max, 1+ longestIncreasingPathDfs(matrix, x, y, m, n, store))
		}
	}
	store[i][j] = max
	return max
}

