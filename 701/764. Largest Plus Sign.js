/**
 * @param {number} n
 * @param {number[][]} mines
 * @return {number}
 */
const orderOfLargestPlusSign = function (n, mines) {
    const left = new Array(n)
    const right = new Array(n)
    const top = new Array(n)
    const bottom = new Array(n)
    const m = new Array(n)
    for (let i = 0; i < n; i++) {
        left[i] = new Array(n)
        left[i].fill(0)
        right[i] = new Array(n)
        right[i].fill(0)
        top[i] = new Array(n)
        top[i].fill(0)
        bottom[i] = new Array(n)
        bottom[i].fill(0)
        m[i] = new Array(n)
        m[i].fill(1)
    }

    for (let i = 0; i < mines.length; i++) {
        m[mines[i][0]][mines[i][1]] = 0
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const x = n - i - 1
            const y = n - j - 1

            if (m[i][j] == 1) {
                left[i][j] = j > 0 ? left[i][j - 1] + 1 : 1
                top[i][j] = i > 0 ? top[i - 1][j] + 1 : 1
            }

            if (m[x][y] == 1) {
                right[x][y] = y < n - 1 ? right[x][y + 1] + 1 : 1
                bottom[x][y] = x < n - 1 ? bottom[x + 1][y] + 1 : 1
            }
        }
    }

    let max = 0
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            max = Math.max(max, Math.min(left[i][j], right[i][j], top[i][j], bottom[i][j]))
        }
    }
    return max
}
