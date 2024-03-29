/*
The set S originally contains numbers from 1 to n. But unfortunately, due to the data error, one of the numbers in the set got duplicated to another number in the set, which results in repetition of one number and loss of another number.

    Given an array nums representing the data status of this set after the error. Your task is to firstly find the number occurs twice and then find the number that is missing. Return them in the form of an array.

    Example 1:
Input: nums = [1,2,2,4]
Output: [2,3]
Note:
1.    The given array size will in the range [2, 10000].
2.    The given array's numbers won't have any order.
*/


/**
 * Runtime: 84 ms, faster than 44.03% of JavaScript online submissions for Set Mismatch.
 * Memory Usage: 38.7 MB, less than 100.00% of JavaScript online submissions for Set Mismatch.
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums1 = function (nums) {
    const s = new Set();
    let total = (1 + nums.length) * nums.length / 2;
    const r = [0, 0];
    for (let i = 0; i < nums.length; i++) {
        if (s.has(nums[i])) {
            r[0] = nums[i];
        }
        s.add(nums[i]);
        total -= nums[i];
    }
    r[1] = r[0] + total;
    return r;
};


const findErrorNums2 = function (nums) {
    const r = [0,0]
    for (let i = 0; i < nums.length; i++) {
        const v = Math.abs(nums[i]) - 1
        if(nums[v] < 0){
            r[0] = Math.abs(nums[v])
        }else{
            nums[v] = - nums[v]
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            r[1] = i + 1
            return r
        }
    }
    return r;
};


const { normalTest } = require('../test/index');

const test = [{
    params: [[1, 2, 2, 4]],
    result: [2, 3],
}, {
    params: [[2, 2]],
    result: [2, 1],
}, {
    params: [[3, 2, 2]],
    result: [2, 1],
}];

normalTest(test, findErrorNums1);
normalTest(test, findErrorNums2);
