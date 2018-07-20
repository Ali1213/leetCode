// Given a 2D integer matrix M representing the gray scale of an image, you need to design a smoother to make the gray scale of each cell becomes the average gray scale (rounding down) of all the 8 surrounding cells and itself. If a cell has less than 8 surrounding cells, then use as many as you can.

// Example 1:
// Input:
// [[1,1,1],
//  [1,0,1],
//  [1,1,1]]
// Output:
// [[0, 0, 0],
//  [0, 0, 0],
//  [0, 0, 0]]
// Explanation:
// For the point (0,0), (0,2), (2,0), (2,2): floor(3/4) = floor(0.75) = 0
// For the point (0,1), (1,0), (1,2), (2,1): floor(5/6) = floor(0.83333333) = 0
// For the point (1,1): floor(8/9) = floor(0.88888889) = 0
// Note:
// The value in the given matrix is in the range of [0, 255].
// The length and width of the given matrix are in the range of [1, 150].




// beat 43.75%
/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function (M) {
    let m = M.length;
    let n = M[0].length;
    let result = new Array(m)
    for (let i = 0; i < m; i++) {
        result[i] = new Array(n)
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            result[i][j] = getValue(M, i, j)
        }
    }
    return result;
    function getValue(M, i, j) {
        let iL = M[i - 1], iN = M[i], iR = M[i + 1];
        let v = 0, t = 0;
        if (iL) {
            if (!isNaN(iL[j - 1])) {
                t++;
                v += iL[j - 1]
            }
            if (!isNaN(iL[j])) {
                t++;
                v += iL[j]
            }
            if (!isNaN(iL[j + 1])) {
                t++;
                v += iL[j + 1]
            }
        }
        if (!isNaN(iN[j - 1])) {
            t++;
            v += iN[j - 1]
        }
        if (!isNaN(iN[j])) {
            t++;
            v += iN[j]
        }
        if (!isNaN(iN[j + 1])) {
            t++;
            v += iN[j + 1]
        }
        if (iR) {
            if (!isNaN(iR[j - 1])) {
                t++;
                v += iR[j - 1]
            }
            if (!isNaN(iR[j])) {
                t++;
                v += iR[j]
            }
            if (!isNaN(iR[j + 1])) {
                t++;
                v += iR[j + 1]
            }
        }
        return Math.floor(v / t)
    }
};






// beat 1.54%
/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function (M) {
    let m = M.length;
    let n = M[0].length;
    let result = new Array(m)
    for (let i = 0; i < m; i++) {
        result[i] = new Array(n)
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let count = 0, t = 0;
            let x = i - 1;
            while (x <= i + 1) {
                if (x == m || x < 0) {
                    x++
                    continue;
                };
                let y = j - 1;
                while (y <= j + 1) {
                    if (y == n || y < 0) {
                        y++
                        continue;
                    }
                    count += M[x][y]
                    t++
                    y++
                }
                x++
            }
            result[i][j] = Math.floor(count / t)
        }
    }
    return result;
};