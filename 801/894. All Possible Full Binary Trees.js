/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

//  Runtime
//  142 ms
//  Beats
//  68.36%
//  Memory
//  52.3 MB
//  Beats
//  84.81%
//  Click to check the distribution chart
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
const allPossibleFBT = function (n) {
    const m = new Map()

    const createBT = (N) => {
        if (N % 2 === 0) return []
        if (N === 1) return [new TreeNode(0)]
        if (m.has(N)) return m.get(N)
        const result = []

        for (let i = 1; i < N; i += 2) {
            const left = createBT(i)
            const right = createBT(N - i - 1)

            for (const a of left) {
                for (const b of right) {
                    result.push(new TreeNode(0, a, b))
                }
            }
        }
        m.set(N, result)
        return result
    }
    return createBT(n)
}
