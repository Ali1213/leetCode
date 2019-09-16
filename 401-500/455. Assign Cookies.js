/*
Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie. Each child i has a greed factor gi, which is the minimum size of a cookie that the child will be content with; and each cookie j has a size sj. If sj >= gi, we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number.

    Note:
You may assume the greed factor is always positive.
    You cannot assign more than one cookie to one child.

    Example 1:
Input: [1,2,3], [1,1]

Output: 1

Explanation: You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3.
And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content.
    You need to output 1.
Example 2:
Input: [1,2], [1,2,3]

Output: 2

Explanation: You have 2 children and 3 cookies. The greed factors of 2 children are 1, 2.
You have 3 cookies and their sizes are big enough to gratify all of the children,
    You need to output 2.
*/

/**
 * Runtime: 108 ms, faster than 22.08% of JavaScript online submissions for Assign Cookies.
 * Memory Usage: 37.9 MB, less than 100.00% of JavaScript online submissions for Assign Cookies.
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
const findContentChildren = function (g, s) {
    const gSorted = g.sort((a, b) => a - b);
    const sSorted = s.sort((a, b) => a - b);

    let i = g.length - 1;
    let j = s.length - 1;

    let count = 0;

    while (i >= 0) {
        if (j < 0) {
            return count;
        }

        if (gSorted[i] > sSorted[j]) {
            i--;
            continue;
        }

        i--;
        j--;
        count++;
    }

    return count;
};


const assert = require('assert');

const test = [
    [[1, 2, 3], [1, 1], 1],
    [[1, 2], [1, 2, 3], 2],
    [[10, 9, 8, 7], [5, 6, 7, 8], 2],
];


test.forEach(([A, B, r], index) => {
    try {
        assert.deepEqual(findContentChildren(A, B), r);
    } catch (e) {
        console.log(`${index} occur error`);
        console.log(e);
        throw e;
    }
});
