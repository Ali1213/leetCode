// On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed).

// Once you pay the cost, you can either climb one or two steps. You need to find minimum cost to reach the top of the floor, and you can either start from the step with index 0, or the step with index 1.

// Example 1:
// Input: cost = [10, 15, 20]
// Output: 15
// Explanation: Cheapest is start on cost[1], pay that cost and go to the top.
// Example 2:
// Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
// Output: 6
// Explanation: Cheapest is start on cost[0], and only step on 1s, skipping cost[3].
// Note:
// cost will have a length in the range [2, 1000].
// Every cost[i] will be an integer in the range [0, 999].


// beat 88.96%
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let a = cost[0],
        b = cost[1],
        n = cost.length;
    for(let i = 2;i<=n;i++){
        let v = i === n ? 0:cost[i];
        let r = Math.min(a+v, b+v);
        a = b;
        b = r;
    }
    return b;
};

// beat 48.05%
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    for(let i = cost.length - 3;i >=0;i--){
        cost[i] = cost[i] + Math.min(cost[i+1],cost[i+2]);
    }
    return Math.min(cost[0],cost[1]);
};


