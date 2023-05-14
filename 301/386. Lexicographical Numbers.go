package  main


// Runtime
// 12 ms
// Beats
// 45%
// Memory
// 6.5 MB
// Beats
// 85%
func lexicalOrder(n int) []int {
    res := make([]int, 0, n)
	for i := 1; i < 10; i++ {
		dfsOrder(i, n, &res)
	}
	return res
}

func dfsOrder(cur, n int, res *[]int){
	if cur > n {
		return
	}
	*res = append(*res, cur)
	for i:=0; i< 10; i++ {
		if cur * 10 + i > n {
			return
		}
		dfsOrder(10*cur + i, n, res)
	}
}