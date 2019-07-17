/*

There are n flights, and they are labeled from 1 to n.

We have a list of flight bookings.  The i-th booking bookings[i] = [i, j, k] means that we booked k seats from flights labeled i to j inclusive.

Return an array answer of length n, representing the number of seats booked on each flight in order of their label.

 

Example 1:

Input: bookings = [[1,2,10],[2,3,20],[2,5,25]], n = 5
Output: [10,55,45,25,25]
 

Constraints:

1 <= bookings.length <= 20000
1 <= bookings[i][0] <= bookings[i][1] <= n <= 20000
1 <= bookings[i][2] <= 10000

*/

/**
 * Runtime: 132 ms, faster than 100.00% of JavaScript online submissions for Corporate Flight Bookings.
 * Memory Usage: 57.7 MB, less than 100.00% of JavaScript online submissions for Corporate Flight Bookings.
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {
    let r = new Array(n)
    for (let i = 0; i < n; i++) {
        r[i] = 0;
    }

    for (let i = 0; i < bookings.length; i++) {
        r[bookings[i][0] - 1] += bookings[i][2];
        if (bookings[i][1] < n) r[bookings[i][1]] -= bookings[i][2]
    }
    for (let i = 1; i < n; i++) r[i] += r[i - 1]
    return r;
};


const assert = require('assert')
var test = [
    [[[1, 2, 10], [2, 3, 20], [2, 5, 25]], 5, [10, 55, 45, 25, 25]],
]


test.forEach(([A, B, r], index) => {
    try {
        assert.deepEqual(corpFlightBookings(A, B), r)
    } catch (e) {
        console.log(`${index} occur error`)
        console.log(e)
    }
})
