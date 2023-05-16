package main

import (
	"strings"
)
// Runtime
// 0 ms
// Beats
// 100%
// Memory
// 2 MB
// Beats
// 100%

func lengthLongestPath(input string) int {
	lines := strings.Split(input, "\n")
	maxLen := 0 
	pathLen := make(map[int]int, 0)
	for _, line := range lines {
		name := strings.TrimLeft(line, "\t")
		depth := len(line) - len(name)
		
		if strings.Contains(name,".") {
			maxLen = max(maxLen, pathLen[depth] + len(name))
		} else {
			pathLen[depth + 1] = pathLen[depth] + len(name) + 1
		}
	}
	return maxLen
}


func max(a, b int) int{
	if a > b {
		return a
	}
	return b
}