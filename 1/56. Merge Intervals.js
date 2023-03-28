// Given a collection of intervals, merge all overlapping intervals.

// Example 1:

// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considerred overlapping.

// beat 100%
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    if(intervals.length < 2) return intervals
    intervals = intervals.sort((a,b)=> a.start-b.start)
    let results = [];
    let a = intervals[0]
    for(let i = 1;i<intervals.length;i++){
        if(intervals[i].start<=a.end){
            a.end = a.end>intervals[i].end ? a.end : intervals[i].end
        }else {
            results.push(a);
            a = intervals[i];
        }
    }
    results.push(a)
    return results
};