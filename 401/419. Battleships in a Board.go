package main



// Runtime
// 0 ms
// Beats
// 100%
// Memory
// 2.4 MB
// Beats
// 22.45%
func countBattleships(board [][]byte) int {

	var dfs func([][]byte, int, int)
    dfs = func(board [][]byte, i, j int){
		if i < 0 || j < 0 || i >= len(board) || j >= len(board[0]) || board[i][j] != '.' {
			return
		}
		board[i][j] = '.'
		dfs(board, i - 1, j)
		dfs(board, i + 1, j)
		dfs(board, i , j - 1)
		dfs(board, i , j + 1)
	}
	count := 0 
	for i:=0; i< len(board); i++ {
		for j:=0; j< len(board[0]); j++ {
			if board[i][j] == 'X' {
				count +=1
				dfs(board, i, j)
			}
		}
	}
	return count
}