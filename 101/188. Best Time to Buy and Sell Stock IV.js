// You are given an integer array prices where prices[i] is the price of a given stock on the ith day, and an integer k.

// Find the maximum profit you can achieve. You may complete at most k transactions.

// Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).


// Example 1:

// Input: k = 2, prices = [2,4,1]
// Output: 2
// Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.
// Example 2:

// Input: k = 2, prices = [3,2,6,5,0,3]
// Output: 7
// Explanation: Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4. Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.


// Constraints:

// 1 <= k <= 100
// 1 <= prices.length <= 1000
// 0 <= prices[i] <= 1000

// Runtime: 78 ms, faster than 93.21% of JavaScript online submissions for Best Time to Buy and Sell Stock IV.
// Memory Usage: 42.2 MB, less than 88.55% of JavaScript online submissions for Best Time to Buy and Sell Stock IV.

const maxProfit1 = (k, prices) => {
    let maxK = k
    if (k > prices.length + prices.length) {
        maxK = prices.length + prices.length
    }
    // const dp = new Array(prices.length + 1)
    // for (let i = 0; i < dp.length; i++) {
    //     dp[i] = new Array(maxK + 1)
    //     dp[i].fill([])
    // }

    const hold = new Array(maxK + 1)
    const sold = new Array(maxK + 1)
    sold.fill(0)
    hold.fill(Number.MIN_SAFE_INTEGER)
    for (let i = 0; i < prices.length; i++) {
        for (let j = 1; j <= maxK; j++) {
            hold[j] = Math.max(hold[j], sold[j - 1] - prices[i])
            sold[j] = Math.max(sold[j], hold[j] + prices[i])
        }
    }
    return sold[maxK]
}
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit2 = (k, prices) => {
    let maxK = k
    let pLen = prices.length
    if (maxK > pLen + pLen) {
        maxK = pLen + pLen
    }

    let dp = new Array(pLen)

    for (let i = 0; i < pLen; i++) {
        dp[i] = new Array(maxK + 1)
        dp[i][0] = [0, Number.MIN_SAFE_INTEGER]
    }

    for (let i = 0; i < pLen; i++) {
        for (let j = maxK; j > 0; j--) {
            if (i === 0) {
                dp[i][j] = [0, -prices[i]]
                continue
            }
            if (!dp[i - 1][j]) {
                dp[i - 1][j] = [0, 0]
            }
            if (!dp[i - 1][j - 1]) {
                dp[i - 1][j - 1] = [0, 0]
            }
            dp[i][j] = [
                Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i]),
                Math.max(dp[i - 1][j][1], dp[i - 1][j - 1][0] - prices[i])
            ]
        }
    }
    return dp[pLen-1][maxK][0]
}


const { normalTest } = require('../test')


const tests = [
    {
        params: [2, [2, 4, 1]],
        result: 2,
    },
    {
        params: [2, [3, 2, 6, 5, 0, 3]],
        result: 7,
    },
    {
        params: [2, [3, 3, 5, 0, 0, 3, 1, 4]],
        result: 6,
    },
]

normalTest(tests, maxProfit1)
normalTest(tests, maxProfit2)
