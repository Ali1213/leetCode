/* Given a collection of numbers that might contain duplicates, return all possible unique permutations.

Example:

Input: [1,1,2]
Output:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
*/


/**
 * Runtime: 172 ms, faster than 20.57% of JavaScript online submissions for Permutations II.
Memory Usage: 41.5 MB, less than 36.90% of JavaScript online submissions for Permutations II.
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = function (nums) {
    const result = []
    const go = (cur, rest) => {
        if (rest.length === 0) {
            result.push(cur)
            return
        }
        for (let i = 0; i < rest.length; i++) {
            if (rest.indexOf(rest[i]) != i) {
                continue;
            }
            go(
                [...cur, rest[i]],
                [...rest.slice(0, i), ...rest.slice(i + 1)],
            )
        }
    }
    go([], nums)
    return result
}
