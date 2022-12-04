// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.


// Example 1:

// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]
// Example 2:

// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].


// Constraints:

// 0 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 105
// intervals is sorted by starti in ascending order.
// newInterval.length == 2
// 0 <= start <= end <= 105


/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
//  Runtime: 132 ms, faster than 25.14% of JavaScript online submissions for Insert Interval.
//  Memory Usage: 44.4 MB, less than 47.67% of JavaScript online submissions for Insert Interval.
const merge = (a, b) => [Math.min(a[0], b[0]), Math.max(a[1], b[1])]
const insert = (intervals, newInterval) => {
    if (intervals.length === 0) return [newInterval]
    const intervalMeg = []
    let isAdd = false
    if (intervals[0][0] > newInterval[1]) {
        isAdd = true
        intervalMeg.push(newInterval)
    }
    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][1] < newInterval[0]) {
            intervalMeg.push(intervals[i])
        } else if (intervals[i][0] > newInterval[1]) {
            if (!isAdd) {
                isAdd = true
                intervalMeg.push(newInterval)
            }
            intervalMeg.push(intervals[i])
        } else if (!isAdd) {
            newInterval = merge(newInterval, intervals[i])
        }
    }
    if (!isAdd) {
        intervalMeg.push(newInterval)
    }
    return intervalMeg
}


const { normalTest } = require('../test')


const tests = [
    {
        params: [[[1, 3], [6, 9]], [2, 5]],
        result: [[1, 5], [6, 9]],
    },
    {
        params: [[[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]],
        result: [[1, 2], [3, 10], [12, 16]],
    },
    {
        params: [[[2, 5], [6, 7], [8, 9]], [0, 1]],
        result: [[0, 1], [2, 5], [6, 7], [8, 9]],
    },
]

normalTest(tests, insert)
