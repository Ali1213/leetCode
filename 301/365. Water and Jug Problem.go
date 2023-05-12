package main

func canMeasureWater(jug1Capacity int, jug2Capacity int, targetCapacity int) bool {
    return targetCapacity == 0 || ((targetCapacity <= jug1Capacity + jug2Capacity) && targetCapacity % grd(jug1Capacity, jug2Capacity) == 0)
}

func grd(x int, y int) int {
    if y == 0 {
        return x
    }
    return grd(y, x % y)
}