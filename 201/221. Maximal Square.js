/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalSquare = function (matrix) {
    let max = 0
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] == '0') {
                matrix[i][j] = 0
            } else {
                matrix[i][j] = Math.min(
                    i > 0 ? matrix[i - 1][j] : 0,
                    j > 0 ? matrix[i][j - 1] : 0,
                    i > 0 && j > 0 ? matrix[i - 1][j - 1] : 0,
                ) + 1
            }
            max = Math.max(max, matrix[i][j])
        }
    }
    return max * max
}
