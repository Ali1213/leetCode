/* 
In a list of songs, the i-th song has a duration of time[i] seconds. 

Return the number of pairs of songs for which their total duration in seconds is divisible by 60.  Formally, we want the number of indices i < j with (time[i] + time[j]) % 60 == 0.

 

Example 1:

Input: [30,20,150,100,40]
Output: 3
Explanation: Three pairs have a total duration divisible by 60:
(time[0] = 30, time[2] = 150): total duration 180
(time[1] = 20, time[3] = 100): total duration 120
(time[1] = 20, time[4] = 40): total duration 60
Example 2:

Input: [60,60,60]
Output: 3
Explanation: All three pairs have a total duration of 120, which is divisible by 60.
 

Note:

1 <= time.length <= 60000
1 <= time[i] <= 500 
*/



/**
 * Runtime: 5720 ms, faster than 13.56% of JavaScript online submissions for Pairs of Songs With Total Durations Divisible by 60.
 * Memory Usage: 37.6 MB, less than 69.67% of JavaScript online submissions for Pairs of Songs With Total Durations Divisible by 60.
 *
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function (time) {
    let count = 0;
    for (let i = 0; i < time.length; i++) {
        for (let j = i + 1; j < time.length; j++) {
            if ((time[i] + time[j]) % 60 === 0) {
                count += 1
            }
        }
    }
    return count
};


/**
 * Runtime: 52 ms, faster than 100.00% of JavaScript online submissions for Pairs of Songs With Total Durations Divisible by 60.
 * Memory Usage: 38.1 MB, less than 30.33% of JavaScript online submissions for Pairs of Songs With Total Durations Divisible by 60.
 * @param {number[]} time
 * @return {number}
 */

var numPairsDivisibleBy60 = function (time) {
    let count = 0;

    const store = {

    }

    for (let i = 0; i < time.length; i++) {
        let v = time[i] % 60

        if (store[60 - v]) {
            count += store[60 - v];
        }
        if (v === 0 && store[0]) {
            count += store[0]
        }

        if (store[v]) {
            store[v] += 1
        } else store[v] = 1;
    }

    return count
};
