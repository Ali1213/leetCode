package main


// func numIslands(grid [][]byte) int {
// 	count := 0
//     for i := 0; i < len(grid); i++ {
// 		for j := 0; j < len(grid[i]); j++ {
// 			// 49 == "1"
// 			if grid[i][j] == 49 {
// 				count +=1
// 				find(grid, i, j)
// 			}
// 		}
// 	}
// 	return count
// }

// Runtime
// 0 ms
// Beats
// 100%
// Memory
// 3.9 MB
// Beats
// 77.48%
func numIslands(grid [][]byte) int {
	count := 0
    for i, points := range grid {
		for j, point := range points {
			// 49 == "1"
			if point == 49 {
				count +=1
				find(grid, i, j)
			}
		}
	}
	return count
}

func find(grid[][]byte, x, y int){
	if grid[x][y] != 49 {
		return
	}
	// 48 == "0"
	grid[x][y] = 48
    if x > 0 {
		find(grid, x-1, y)
	}
    if x < len(grid) {
		find(grid, x+1, y)
	}
	if y > 0 {
		find(grid, x, y-1)
	}

	if y < len(grid[0]) {
		find(grid, x, y+1)
	}
}
