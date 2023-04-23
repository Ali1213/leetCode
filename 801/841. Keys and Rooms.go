package main
// 7 ms
// Beats
// 75.58%
// Memory
// 4.1 MB
// Beats
// 55.20%
func canVisitAllRooms(rooms [][]int) bool {
    if len(rooms) <= 1 {
        return true
    }
    a := make([]bool,len(rooms))
    a[0] = true

    queue := make([]int,len(rooms))
    queue = append(queue, 0)
    for ;len(queue) > 0; {
        for _, room := range rooms[queue[0]] {
            if !a[room] {
                a[room] = true
                queue = append(queue, room)
            }
        }
        queue = queue[1:]
    }
    for _, has := range a {
        if !has {
            return false
        }
    }
    return true
}