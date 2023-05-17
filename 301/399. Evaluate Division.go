package main


// Runtime
// 2 ms
// Beats
// 49.18%
// Memory
// 2.1 MB
// Beats
// 83.61%
func calcEquation(equations [][]string, values []float64, queries [][]string) []float64 {
    tree := make(map[string]map[string]float64, 0)
	for index, equation := range equations {
		if tree[equation[0]] == nil {
			tree[equation[0]] = make(map[string]float64, 0)
		}
		tree[equation[0]][equation[1]] = values[index]
		if tree[equation[1]] == nil {
			tree[equation[1]] = make(map[string]float64, 0)
		}
		tree[equation[1]][equation[0]] = 1/values[index]
	}

	road := make([]float64, 0)
	has := make(map[string]bool, 0)
	var find func (tree map[string]map[string]float64, a, b string)(bool)
	find = func (tree map[string]map[string]float64, a, b string)(bool){
		m, ok := tree[a]
		if !ok {
			return false
		}
		if val, ok := m[b]; ok {
			road = append(road, val)
			return true
		}
		for mm, f := range m {
			if has[mm] {
				continue
			}
			road = append(road, f)
			has[mm] = true
			b := find(tree, mm, b)
			if b {
				return true
			}
			road = road[0:len(road)-1]
			has[mm] = false
		}
		return false
	}

	result := make([]float64, 0, len(queries))
	for _, query := range queries {
		bol := find(tree, query[0], query[1])
		if bol {
			val := 1.0
			for _,v := range road {
				val *= v
			}
			result = append(result, val)
		} else {
			result = append(result, -1.0)
		}
		road = make([]float64, 0)
		has = make(map[string]bool, 0)
	}
	return result
}
