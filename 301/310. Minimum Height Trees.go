package main

import (
	"encoding/json"
)


// Runtime
// 3213 ms
// Beats
// 5.97%
// Memory
// 12.6 MB
// Beats
// 26.87%
func findMinHeightTrees(n int, edges [][]int) []int {
	if n == 1 {
		return []int{0}
	}
	mapStore := makeTree(edges, n)
	for len(mapStore) > 2 {
		toDelete := make([]int, 0)
		for k := range mapStore {
			if len(mapStore[k]) == 1 {
				toDelete = append(toDelete, k)
			}
		}
		for _, k := range toDelete {
			for v := range mapStore[k] {
				delete(mapStore[v], k)
			}
			delete(mapStore, k)
		}
	}
	r := make([]int, 0, len(mapStore))
	for k := range mapStore {
		r = append(r, k)
	}
	return r
}

func makeTree(edges [][]int,  n int) map[int]map[int]struct{}{
	store := make(map[int]map[int]struct{}, n)
	for _, edge := range edges {
		if _, ok := store[edge[0]]; !ok {
			store[edge[0]] = make(map[int]struct{}, 0)
		}
		store[edge[0]][edge[1]] = struct{}{}
		if _, ok := store[edge[1]]; !ok {
			store[edge[1]] = make(map[int]struct{}, 0)
		}
		store[edge[1]][edge[0]] = struct{}{}
	}
	return store
}


func PettyJSON(v interface{})string{
	b, err := json.MarshalIndent(v, "", "  ")
	if err != nil {
		panic(err)
	}
	return string(b)
}