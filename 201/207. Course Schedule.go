package main


// Runtime
// 8 ms
// Beats
// 87.68%
// Memory
// 6.3 MB
// Beats
// 76.35%   
// 这个是BFS的方法
func canFinish1(numCourses int, prerequisites [][]int) bool {
    graph := make(map[int][]int, 0)
	invest := make([]int, numCourses)
	for _, arr := range prerequisites {
		if graph[arr[1]] == nil {
			graph[arr[1]] = make([]int, 0)
		}
		invest[arr[0]]++
		graph[arr[1]] = append(graph[arr[1]], arr[0])
	}
	queue := make([]int, 0)
	for i := 0; i< numCourses; i++ {
		if invest[i] == 0 {
			queue = append(queue, i)
		}
	}

	for len(queue) > 0 {
		cur := queue[0]
		v, ok := graph[cur]
		if ok && invest[cur] == 0 {
			for _, val := range v {
				if invest[val] > 0 {
					queue = append(queue, val)
					invest[val]--
				}
			}
		}
		queue = queue[1:]
	}
	for _, v := range invest {
		if v > 0 {
			return false
		}
	}
	return true
}



// 测试使用DFS的方法
// Runtime
// 17 ms
// Beats
// 26.44%
// Memory
// 6.7 MB
// Beats
// 29.57%
func canFinish(numCourses int, prerequisites [][]int) bool {
    graph := make(map[int][]int, 0)
	for _, arr := range prerequisites {
		if graph[arr[1]] == nil {
			graph[arr[1]] = make([]int, 0)
		}
		graph[arr[1]] = append(graph[arr[1]], arr[0])
	}
	store := make(map[int]int, 0)
	for i:=0; i< numCourses; i++ {
		if !dfs(store, i, graph) {
			return false
		}
	}
	return true
}


func dfs(store map[int]int, i int, graph map[int][]int) bool{
	// if store[i] == 
	if store[i] == -1 {
		return false
	}

	if store[i] ==  1 {
		return true
	}
	store[i] = - 1
	for _, val := range graph[i] {
		if !dfs(store, val, graph) {
			return false
		}
	}
	store[i] = 1
	return true
}
