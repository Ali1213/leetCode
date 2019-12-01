/*
Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings.

You need to help them find out their common interest with the least list index sum. If there is a choice tie between answers, output all of them with no order requirement. You could assume there always exists an answer.

Example 1:
Input:
["Shogun", "Tapioca Express", "Burger King", "KFC"]
["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
Output: ["Shogun"]
Explanation: The only restaurant they both like is "Shogun".
Example 2:
Input:
["Shogun", "Tapioca Express", "Burger King", "KFC"]
["KFC", "Shogun", "Burger King"]
Output: ["Shogun"]
Explanation: The restaurant they both like and have the least index sum is "Shogun" with index sum 1 (0+1).
Note:
The length of both lists will be in the range of [1, 1000].
The length of strings in both lists will be in the range of [1, 30].
The index is starting from 0 to the list length minus 1.
No duplicates in both lists.
*/

/**
 * Runtime: 100 ms, faster than 71.26% of JavaScript online submissions for Minimum Index Sum of Two Lists.
 * Memory Usage: 43.4 MB, less than 25.00% of JavaScript online submissions for Minimum Index Sum of Two Lists.
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
const findRestaurant = function (list1, list2) {
    let minArr = list1;
    let maxArr = list2;
    if (list1.length > list2.length) {
        minArr = list2;
        maxArr = list1;
    }
    const s = {};
    for (let i = 0; i < minArr.length; i++) {
        s[minArr[i]] = i;
    }
    let min = maxArr.length + minArr.length;
    let result = [];
    for (let i = 0; i < maxArr.length; i++) {
        if (s[maxArr[i]] !== undefined) {
            if (i + s[maxArr[i]] < min) {
                result = [maxArr[i]];
                min = i + s[maxArr[i]];
            } else if (i + s[maxArr[i]] === min) {
                result.push(maxArr[i]);
            }
        }
    }
    return result;
};


const { normalTest } = require('../test/index');

const test = [{
    params: [['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
        ['Piatti', 'The Grill at Torrey Pines', 'Hungry Hunter Steakhouse', 'Shogun']],
    result: ['Shogun'],
}, {
    params: [['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
        ['KFC', 'Shogun', 'Burger King']],
    result: ['Shogun'],
}, {
    params: [['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
        ['KFC', 'Burger King', 'Tapioca Express', 'Shogun']],
    result: ['KFC', 'Burger King', 'Tapioca Express', 'Shogun'],
}];

normalTest(test, findRestaurant);
