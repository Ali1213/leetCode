// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.


// Example 1:

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation:
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]


// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// 1 <= k <= nums.length
// Accepted
// 685,293
// Runtime: 1156 ms, faster than 25.82% of JavaScript online submissions for Sliding Window Maximum.
// Memory Usage: 90.7 MB, less than 48.09% of JavaScript online submissions for Sliding Window Maximum.

class Queue {
    constructor() {
        this.arr = []
    }

    push(index, val) {
        let i = this.arr.length - 1
        while (i >= 0 && this.arr[i].val < val) {
            this.arr.pop()
            i -= 1
        }
        this.arr.push({
            index,
            val,
        })
    }

    pop(index) {
        if (this.arr.length > 0 && index === this.arr[0].index) {
            this.arr.shift()
        }
    }

    max() {
        return this.arr[0].val
    }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = (nums, k) => {
    const q = new Queue()
    const r = []
    for (let i = 0; i < nums.length; i++) {
        q.push(i, nums[i])
        if (i >= k - 1) {
            r.push(q.max())
            q.pop(i - k + 1)
        }
    }
    return r
}


const { resultArrEqual } = require('../test')


const tests = [
    {
        params: [[1, 3, -1, -3, 5, 3, 6, 7], 3],
        result: [3, 3, 5, 5, 6, 7],
    },
    {
        params: [[1], 1],
        result: [1],
    },
]

resultArrEqual(tests, maxSlidingWindow)
