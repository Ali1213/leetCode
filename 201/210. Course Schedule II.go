package main


func findOrder(numCourses int, prerequisites [][]int) []int {
    request := make(map[int][]int, 0)
    invest := make([]int, numCourses)
    queue := make([]int, 0)
    for _, vals := range prerequisites {
        if len(request[vals[1]]) == 0 {
            request[vals[1]] = make([]int, 0)
        }
        invest[vals[0]]++
        request[vals[1]] = append(request[vals[1]], vals[0])
    }

    paths := make([]int, 0)
    for i := 0; i< numCourses; i++ {
        if invest[i] == 0 {
            queue = append(queue, i)
        }
    }
    for len(queue) > 0 {
        cur := queue[0]

        // 等于-1的时候，跳过
        // 等于0的时候，取出request只遍历， 并将值置为-1
        // 等于1的时候，取出request遍历， 并将值置为-1
        // 大于1的时候，将值置为-1

        if invest[cur] > 1 || invest[cur] <= -1 {
            invest[cur]--
            queue = queue[1:]
            continue
        }
        paths = append(paths, cur)
        queue = append(queue, request[cur]...)
        invest[cur]= -1

        queue = queue[1:]
    }
    // fmt.Println(invest)
    for _, val := range invest {
        if val > 0 {
            return make([]int, 0)
        }
    }
    return paths
}