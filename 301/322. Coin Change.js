// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.



// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Example 3:

// Input: coins = [1], amount = 0
// Output: 0


// Constraints:

// 1 <= coins.length <= 12
// 1 <= coins[i] <= 231 - 1
// 0 <= amount <= 104

// Runtime: 236 ms, faster than 38.09% of JavaScript online submissions for Coin Change.
// Memory Usage: 47.1 MB, less than 61.22% of JavaScript online submissions for Coin Change.

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange2 = function (coins, amount) {
    var store = new Array(amount + 1)
    store.fill(-666)
    return dp(coins, amount, store)
};

var dp2 = (coins, amount, store) => {
    if (amount == 0) return 0;
    if (amount < 0) return -1;
    if (store[amount] != -666) {
        return store[amount]
    }
    let result = Number.MAX_SAFE_INTEGER
    for (let i = 0; i < coins.length; i++) {
        const r = dp(coins, amount - coins[i], store)
        if (r == -1) continue
        result = Math.min(
            result,
            r + 1
        )
    }
    store[amount] = (result == Number.MAX_SAFE_INTEGER) ? -1 : result;
    return store[amount];
}

// Runtime: 159 ms, faster than 71.92% of JavaScript online submissions for Coin Change.
// Memory Usage: 45.8 MB, less than 86.23% of JavaScript online submissions for Coin Change.

var coinChange = function (coins, amount) {
    //     if (amount == 0) return 0;
    //     if (amount < 0) return -1;
    var store = new Array(amount + 1)
    store.fill(amount + 1)
    store[0] = 0;
    for (let i = 0; i < store.length; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (i - coins[j] < 0) continue
            store[i] = Math.min(store[i], store[i - coins[j]] + 1)
        }
    }
    return store[amount] == amount + 1 ? -1 : store[amount]
};

// var dp2 = (coins, amount, store) => {
//     if (amount == 0) return 0;
//     if (amount < 0) return -1;
//     if (store[amount] != -666) {
//         return store[amount]
//     }
//     let result = Number.MAX_SAFE_INTEGER
//     for (let i = 0; i < coins.length; i++) {
//         const r = dp(coins, amount - coins[i], store)
//         if (r == -1) continue
//         result = Math.min(
//             result,
//             r + 1
//         )
//     }
//     store[amount] = (result == Number.MAX_SAFE_INTEGER) ? -1 : result;
//     return store[amount];
// }


const { normalTest } = require('../test')


const tests = [
    {
        params: [[1, 2, 5], 11],
        result: 3,
    },
    {
        params: [[2], 3],
        result: -1,
    },
    {
        params: [[1], 0],
        result: 0,
    },
]

normalTest(tests, coinChange)
