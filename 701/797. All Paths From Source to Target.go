package  main
// Runtime
// 13 ms
// Beats
// 27.75%
// Memory
// 7.3 MB
// Beats
// 11.56%
func allPathsSourceTarget(graph [][]int) [][]int {
    ans := make([][]int, 0)
    bfs := make([][]int, 0)
    bfs = append(bfs, []int{0})

    for ; len(bfs) > 0 ; {
        cur := bfs[0]
        if cur[len(cur) - 1] == len(graph) - 1 {
            ans = append(ans, cur)
        }
        for _, val := range graph[cur[len(cur) - 1] ] {
            x := make([]int,len(cur))
            copy(x,cur)
            x = append(x, val)
            bfs = append(bfs, x)
        }
        bfs = bfs[1:]
    }
    return ans
}