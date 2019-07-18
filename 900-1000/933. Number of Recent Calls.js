/*
Write a class RecentCounter to count recent requests.

It has only one method: ping(int t), where t represents some time in milliseconds.

Return the number of pings that have been made from 3000 milliseconds ago until now.

Any ping with time in [t - 3000, t] will count, including the current ping.

It is guaranteed that every call to ping uses a strictly larger value of t than before.

 

Example 1:

Input: inputs = ["RecentCounter","ping","ping","ping","ping"], inputs = [[],[1],[100],[3001],[3002]]
Output: [null,1,2,3,3]
 

Note:

Each test case will have at most 10000 calls to ping.
Each test case will call ping with strictly increasing values of t.
Each call to ping will have 1 <= t <= 10^9.

*/

var RecentCounter = function() {
    this.queue = []
};

/** 
 * Runtime: 300 ms, faster than 41.19% of JavaScript online submissions for Number of Recent Calls.
 * Memory Usage: 56.7 MB, less than 100.00% of JavaScript online submissions for Number of Recent Calls.
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.queue.push(t);
    let count = 0;
    let v = t - 3000
    for(let i = this.queue.length - 1; i>=0; i-=1){
        if(this.queue[i] >= v ){
            count ++
        } else break;
    }

    return count || null
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */


const assert = require('assert')
var test = [
    [["RecentCounter", "ping", "ping", "ping", "ping"], [[], [1], [100], [3001], [3002]], [null, 1, 2, 3, 3]],
]


test.forEach(([A, B, r], index) => {
    try {
        var obj = new RecentCounter()
        assert.deepEqual(B.map(item => obj.ping(item[0])),r)
    } catch (e) {
        console.log(`${index} occur error`)
        console.log(e)
    }
})
