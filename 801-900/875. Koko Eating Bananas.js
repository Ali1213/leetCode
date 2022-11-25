// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

// Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

// Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

// Return the minimum integer k such that she can eat all the bananas within h hours.


// Example 1:

// Input: piles = [3,6,7,11], h = 8
// Output: 4
// Example 2:

// Input: piles = [30,11,23,4,20], h = 5
// Output: 30
// Example 3:

// Input: piles = [30,11,23,4,20], h = 6
// Output: 23


// Constraints:

// 1 <= piles.length <= 104
// piles.length <= h <= 109
// 1 <= piles[i] <= 109


// Runtime: 123 ms, faster than 61.56% of JavaScript online submissions for Koko Eating Bananas.
// Memory Usage: 44.8 MB, less than 91.24% of JavaScript online submissions for Koko Eating Bananas.
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
const minEatingSpeed = (piles, h) => {
    let left = 1
    let right = Math.max(...piles)

    while (left < right) {
        const mid = left + Math.floor((right - left) / 2)
        const isFinish = canFinish(piles, mid, h)
        if (isFinish) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    return left
}

const canFinish = (piles, mid, h) => {
    let t = 0
    for (let i = 0; i < piles.length; i++) {
        t += Math.ceil(piles[i] / mid)
    }
    return t <= h
}


const { normalTest } = require('../test')


const tests = [
    {
        params: [[3, 6, 7, 11], 8],
        result: 4,
    },
    {
        params: [[30, 11, 23, 4, 20], 5],
        result: 30,
    },
    {
        params: [[30, 11, 23, 4, 20], 6],
        result: 23,
    },
]

normalTest(tests, minEatingSpeed)
