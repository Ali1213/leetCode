/* 
Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

You may return the answer in any order.

Example 1:

Input: ["bella","label","roller"]
Output: ["e","l","l"]
Example 2:

Input: ["cool","lock","cook"]
Output: ["c","o"]

Note:

1 <= A.length <= 100
1 <= A[i].length <= 100
A[i][j] is a lowercase letter

 */


/**
 * Runtime: 108 ms, faster than 30.07% of JavaScript online submissions for Find Common Characters.
 * Memory Usage: 39.9 MB, less than 100.00% of JavaScript online submissions for Find Common Characters.
* @param {string[]} A
* @return {string[]}
*/
var commonChars = function (A) {
    let r = [];

    let s = {

    };

    for (let j = 0; j < A[0].length; j++) {
        if (s[A[0][j]] === undefined) {
            s[A[0][j]] = 1;
        } else {
            s[A[0][j]] += 1
        }
    }

    for (let i = 1; i < A.length; i++) {
        let h = {

        };

        for (let j = 0; j < A[i].length; j++) {
            if (s[A[i][j]]) {
                h[A[i][j]] = h[A[i][j]] === undefined ? 1 : h[A[i][j]] + 1;
                s[A[i][j]] = s[A[i][j]] - 1;
            }
        }
        s = h;
    }
    let keys = Object.keys(s);
    for (let i = 0; i < keys.length; i++) {
        let j = 0;
        while (j < s[keys[i]]) {
            r.push(keys[i]);
            j++;
        }
    }
    return r;
};



/**
 * Runtime: 72 ms, faster than 81.05% of JavaScript online submissions for Find Common Characters.
 * Memory Usage: 37.9 MB, less than 100.00% of JavaScript online submissions for Find Common Characters.
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
    let r = [];

    for (let j = 0; j < A[0].length; j++) {
        r.push(A[0][j])
    }

    for (let i = 1; i < A.length; i++) {
        let p = []

        for (let j = 0; j < A[i].length; j++) {
            let index = r.indexOf(A[i][j])
            if (index !== -1) {
                p.push(...r.splice(index, 1))
            }
        }
        r = p;
    }
    return r;
};