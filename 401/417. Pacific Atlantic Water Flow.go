package main


// pacificAtlantic
// 思路是
func pacificAtlantic(heights [][]int) [][]int {
	canPac := make([][]bool, 0, len(heights))
	canAtl := make([][]bool, 0, len(heights))
	for i := 0; i< len(heights); i++ {
		canPac[i] = make([]bool, len(heights[0]))
		canAtl[i] = make([]bool, len(heights[0]))
	}
	find := func(x, y, nextX, nextY int){
		if heights[nextX][nextY] <= heights[x][y] {
			return
		}
		if canPac[nextX][nextY] {
			
		}
	}
	
    // for _, heights := range 
	for _, height := range heights {

	}

}