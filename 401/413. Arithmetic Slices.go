package main

// Runtime
// 0 ms
// Beats
// 100%
// Memory
// 2.2 MB
// Beats
// 28.13%
func numberOfArithmeticSlices(nums []int) int {
    if len(nums) < 3 {
        return 0
    }
	now := 0
	count := 0
	for i := 2; i< len(nums); i++ {
		if 	nums[i] - nums[i-1] == nums[i-1]-nums[i-2] {
			now = now + 1
			count += now
		} else {
			now = 0;
		}
	}
	return count
}