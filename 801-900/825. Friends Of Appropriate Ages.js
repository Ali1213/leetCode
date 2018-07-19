// Some people will make friend requests. The list of their ages is given and ages[i] is the age of the ith person. 

// Person A will NOT friend request person B (B != A) if any of the following conditions are true:

// age[B] <= 0.5 * age[A] + 7
// age[B] > age[A]
// age[B] > 100 && age[A] < 100
// Otherwise, A will friend request B.

// Note that if A requests B, B does not necessarily request A.  Also, people will not friend request themselves.

// How many total friend requests are made?

// Example 1:

// Input: [16,16]
// Output: 2
// Explanation: 2 people friend request each other.
// Example 2:

// Input: [16,17,18]
// Output: 2
// Explanation: Friend requests are made 17 -> 16, 18 -> 17.
// Example 3:

// Input: [20,30,100,110,120]
// Output: 
// Explanation: Friend requests are made 110 -> 100, 120 -> 110, 120 -> 100.


// Notes:

// 1 <= ages.length <= 20000.
// 1 <= ages[i] <= 120.


// beat 43.33%
/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function (ages) {
    let count = 0;
    ages.sort((a, b) => a - b)
    let v = -1, tempV = 0;
    for (let i = 0; i < ages.length; i++) {
        if (ages[i] <= 14) continue
        if (ages[i] === v) {
            count += tempV;
            continue;
        }
        let max = 2 * ages[i] - 14
        let j = i + 1
        let t = 0
        while (j < ages.length && ages[j] < max) {
            t++;
            j++
        }
        count += t
        v = ages[i]
        tempV = t
    }
    return count
};
