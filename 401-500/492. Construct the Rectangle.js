/*
For a web developer, it is very important to know how to design a web page's size. So, given a specific rectangular web page’s area, your job by now is to design a rectangular web page, whose length L and width W satisfy the following requirements:

1. The area of the rectangular web page you designed must equal to the given target area.

2. The width W should not be larger than the length L, which means L >= W.

3. The difference between length L and width W should be as small as possible.
    You need to output the length L and the width W of the web page you designed in sequence.
    Example:
Input: 4
Output: [2, 2]
Explanation: The target area is 4, and all the possible ways to construct it are [1,4], [2,2], [4,1].
    But according to requirement 2, [1,4] is illegal; according to requirement 3,  [4,1] is not optimal compared to [2,2]. So the length L is 2, and the width W is 2.
Note:
    The given area won't exceed 10,000,000 and is a positive integer
The web page's width and length you designed must be positive integers.
*/

/**
 * Runtime: 60 ms, faster than 63.70% of JavaScript online submissions for Construct the Rectangle.
 * Memory Usage: 34.1 MB, less than 100.00% of JavaScript online submissions for Construct the Rectangle.
 * @param {number} area
 * @return {number[]}
 */
const constructRectangle = function (area) {
    if (area < 1) return [];
    let sum = 1;
    while (sum * sum < area) {
        sum += 1;
    }

    while (area % sum !== 0) {
        sum -= 1;
    }

    if (area / sum > sum) return [area / sum, sum];

    return [sum, area / sum];
};


const assert = require('assert');

const test = [
    [4, [2, 2]],
    [2, [2, 1]],
];


test.forEach(([A, r], index) => {
    try {
        assert.deepEqual(constructRectangle(A), r);
    } catch (e) {
        console.log(`${index} occur error`);
        console.log(e);
        throw e;
    }
});
