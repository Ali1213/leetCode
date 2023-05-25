package main


// Runtime
// 3 ms
// Beats
// 62.54%
// Memory
// 2.7 MB
// Beats
// 29.93%
func mincostTickets(days []int, costs []int) int {
    cost := 0
    last7 := make([][2]int, 0)
    last30 := make([][2]int, 0)
	
	for _, day := range days {
		for len(last7) > 0 && last7[0][0] + 7 <=  day {
			last7 = last7[1:]
		}
		for len(last30) > 0 && last30[0][0] + 30 <=  day {
			last30 = last30[1:]
		}
		last7 = append(last7, [2]int{day, cost + costs[1]})
		last30 = append(last30, [2]int{day, cost + costs[2]})
		cost = min(cost + costs[0], last7[0][1], last30[0][1])
	}
    
    return cost
}

// func min(a, b, c int) int {
//     if a < b && a < c {
//         return a
//     } else if b < c {
//         return b
//     } else {
//         return c
//     }
// }