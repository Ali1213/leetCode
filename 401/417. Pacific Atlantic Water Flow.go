package main

// pacificAtlantic
// 思路是

// Runtime
// 37 ms
// Beats
// 59.64%
// Memory
// 7.1 MB
// Beats
// 95.18%
func pacificAtlantic(heights [][]int) [][]int {
	xL := len(heights)
	result := make([][]int, 0)
	if xL == 0 {
		return result
	}
	yL := len(heights[0])
	canPac := make([][]bool, 0, xL)
	canAtl := make([][]bool, 0, xL)
	for i := 0; i < xL; i++ {
		canPac = append(canPac, make([]bool, yL))
		canAtl = append(canAtl, make([]bool, yL))
	}

	var find func(x, y int, lastVal int, store *[][]bool)
	find = func(x, y int, lastVal int, store *[][]bool) {
		if x < 0 || x >= xL ||
			y < 0 || y >= yL ||
			(*store)[x][y] {
			return
		}
		if heights[x][y] < lastVal {
			return
		}
		(*store)[x][y] = true
		find(x+1, y, heights[x][y], store)
		find(x-1, y, heights[x][y], store)
		find(x, y+1, heights[x][y], store)
		find(x, y-1, heights[x][y], store)
	}

	for i := 0; i < xL; i++ {
		find(i, 0, -1, &canPac)
		find(i, yL-1, -1, &canAtl)
	}

	for i := 0; i < yL; i++ {
		find(0, i, -1, &canPac)
		find(xL-1, i, -1, &canAtl)
	}

	for i := 0; i < xL; i++ {
		for j := 0; j < yL; j++ {
			if canPac[i][j] && canAtl[i][j] {
				result = append(result, []int{i, j})
			}
		}
	}
	return result
}
