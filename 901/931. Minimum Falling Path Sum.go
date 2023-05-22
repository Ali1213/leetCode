package main

import "math"

// Runtime
// 12 ms
// Beats
// 62.82%
// Memory
// 6.5 MB
// Beats
// 50%
func minFallingPathSum(matrix [][]int) int {
	if len(matrix) == 1 {
		
	}
	xLen := len(matrix)
	yLen := len(matrix[0])
	dp := make([][]int, xLen)
	for i := 0; i < xLen; i++ {
		dp[i] = make([]int, yLen+2)
		dp[i][0] = math.MaxInt16
		dp[i][yLen+1] = math.MaxInt16
	}

	for i := 0; i < yLen; i++ {
		dp[0][i+1] = matrix[0][i]
	}
	m := math.MaxInt16
	for i := 1; i < xLen; i++ {
		for j := 0; j < yLen; j++ {
			dp[i][j+1] = matrix[i][j] + min(dp[i-1][j+1], dp[i-1][j], dp[i-1][j+2])
			if i == xLen - 1 {
			}
		}
	}
	for i := 0 ; i < yLen ; i ++ {
		if dp[xLen-1][i+1] < m {
			m = dp[xLen-1][i+1]
		}
	}
	return m
}

func min(a, b, c int) int {
	if a > b {
		if b > c {
			return c
		} else {
			return b
		}
	} else {
		if a > c {
			return c
		} else {
			return a
		}
	}
}
