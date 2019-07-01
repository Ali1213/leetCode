/* 
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!

Example:

Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6 
*/



/**
 * Runtime: 72 ms, faster than 39.69% of JavaScript online submissions for Trapping Rain Water.
 * Memory Usage: 35.1 MB, less than 70.69% of JavaScript online submissions for Trapping Rain Water.
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    var start = 0, end = height.length - 1;
    var sPos = 0, ePos = end;
    var store = 0;
    var lstore = 0, rstore = 0;
    while (start < end) {
        if (height[start] < height[end]) {
            start += 1;
            if (height[start] >= height[sPos]) {
                if (start - sPos === 1) {
                    sPos += 1
                } else {
                    store += lstore;
                    sPos = start;
                    lstore = 0;
                }
            } else {
                lstore += height[sPos] - height[start]
            }
        } else {
            end -= 1;
            if (height[end] >= height[ePos]) {
                if (end - ePos === 1) {
                    ePos += 1
                } else {
                    store += rstore;
                    ePos = end;
                    rstore = 0;
                }
            } else {
                rstore += height[ePos] - height[end]
            }
        }
    }
    return store;
};




const assert = require('assert')
var test = [
    [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], 6],
    [[5, 1, 2], 1],
    [[5, 1, 2, 1, 5], 11],
]


test.forEach(([A, r]) => {
    assert.deepEqual(trap(A), r)
})



/**
 *
 * Runtime: 60 ms, faster than 88.48% of JavaScript online submissions for Trapping Rain Water.
 * Memory Usage: 35.1 MB, less than 70.12% of JavaScript online submissions for Trapping Rain Water.
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    var start = 0, end = height.length - 1;
    var store = 0;
    var lMax = 0, rMax = 0;
    while (start < end) {
        if (height[start] < height[end]) {
            if (height[start] >= lMax) {
                lMax = height[start]
            } else {
               store += lMax - height[start]
            }
            start += 1;
        } else {
            if(height[end] >= rMax){
                rMax = height[end]
            } else {
                store += rMax - height[end]
            }
            end -= 1;
        }
    }
    return store;
};




var test = [
    [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], 6],
    [[5, 1, 2], 1],
    [[5, 1, 2, 1, 5], 11],
]


test.forEach(([A, r]) => {
    assert.deepEqual(trap(A), r)
})