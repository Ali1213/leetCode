// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.

// You may assume that you have an infinite number of each kind of coin.

// The answer is guaranteed to fit into a signed 32-bit integer.


// Example 1:

// Input: amount = 5, coins = [1,2,5]
// Output: 4
// Explanation: there are four ways to make up the amount:
// 5=5
// 5=2+2+1
// 5=2+1+1+1
// 5=1+1+1+1+1
// Example 2:

// Input: amount = 3, coins = [2]
// Output: 0
// Explanation: the amount of 3 cannot be made up just with coins of 2.
// Example 3:

// Input: amount = 10, coins = [10]
// Output: 1


// Constraints:

// 1 <= coins.length <= 300
// 1 <= coins[i] <= 5000
// All the values of coins are unique.
// 0 <= amount <= 5000


// Runtime: 156 ms, faster than 47.59% of JavaScript online submissions for Coin Change II.
// Memory Usage: 69.5 MB, less than 36.85% of JavaScript online submissions for Coin Change II.
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
const change1 = (amount, coins) => {
    const dp = new Array(coins.length + 1)
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(amount + 1)
        dp[i][0] = 1
    }
    dp[0].fill(0)
    for (let i = 1; i <= coins.length; i++) {
        for (let j = 1; j <= amount; j++) {
            if (j - coins[i - 1] >= 0) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i - 1]]
            } else {
                dp[i][j] = dp[i - 1][j]
            }
        }
    }
    return dp[coins.length][amount]
}


// Runtime: 134 ms, faster than 54.26% of JavaScript online submissions for Coin Change II.
// Memory Usage: 42.5 MB, less than 75.00% of JavaScript online submissions for Coin Change II.

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
const change = (amount, coins) => {
    const dp = new Array(amount + 1)
    dp.fill(0)
    dp[0] = 1
    for (let i = 0; i < coins.length; i++) {
        for (let j = 1; j <= amount; j++) {
            if (j - coins[i] >= 0) {
                dp[j] += dp[j - coins[i]]
            }
        }
    }
    return dp[amount]
}


const { normalTest } = require('../test')


const tests = [
    {
        params: [5, [1, 2, 5]],
        result: 4,
    },
    {
        params: [3, [2]],
        result: 0,
    },
    {
        params: [10, [10]],
        result: 1,
    },
]

normalTest(tests, change)
