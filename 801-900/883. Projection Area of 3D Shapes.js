
// Runtime: 141 ms, faster than 6.56% of JavaScript online submissions for Projection Area of 3D Shapes.
// Memory Usage: 42.7 MB, less than 62.30% of JavaScript online submissions for Projection Area of 3D Shapes.
const projectionArea = function (grid) {
    // z面 有多少个值
    // x面 Max(grid[0][i], grid[0][j])
    // y面 Max(grid[0][i], grid[0][i])
    let z = 0
    let x = 0
    let y = 0
    for (let i = 0; i < grid.length; i++) {
        x += Math.max(...grid[i])
        let max = -1
        for (let j = 0; j < grid[0].length; j++) {
            max = Math.max(max, grid[j][i])
            if (grid[j][i] !== 0) {
                z += 1
            }
        }
        y += max
    }
    return x + y + z
}


const { normalTest } = require('../test')


const tests = [
    {
        params: [[[1, 2], [3, 4]]],
        result: 17,
    },
    {
        params: [[[2]]],
        result: 5,
    },
    {
        params: [[[1, 0], [0, 2]]],
        result: 8,
    },
]

normalTest(tests, projectionArea)
