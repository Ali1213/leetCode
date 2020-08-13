/*
Given a string containing only digits, restore it by returning all possible valid IP address combinations.

A valid IP address consists of exactly four integers (each integer is between 0 and 255) separated by single points.

Example:

Input: "25525511135"
Output: ["255.255.11.135", "255.255.111.35"] 
*/

/**
 * Runtime: 76 ms, faster than 85.21% of JavaScript online submissions for Restore IP Addresses.
 * Memory Usage: 36.8 MB, less than 80.27% of JavaScript online submissions for Restore IP Addresses.
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = (s) => {
    let store = []
    if (s.length > 12 || s.length < 4) return store

    const check = (str) => {
        if (str[0] === '0') return str.length === 1
        return Number(str) < 256
    }

    for (let i = 0; i < s.length - 3; i++) {
        const a = s.substring(0, i + 1)
        if (!check(a)) continue
        for (let j = i + 1; j < s.length - 2; j++) {
            const b = s.substring(i + 1, j + 1)
            if (!check(b)) continue
            for (let k = j + 1; k < s.length - 1; k++) {
                const c = s.substring(j + 1, k + 1)
                if (!check(c)) continue
                const d = s.substring(k + 1)
                if (check(d)) {
                    store.push(a + '.' + b + '.' + c + '.' + d)
                }
            }
        }
    }

    return store
};


const { resultArrEqual } = require('../test')


const tests = [
    {
        params: ["25525511135"],
        result: ["255.255.11.135", "255.255.111.35"],
    },
    {
        params: ["0000"],
        result: ["0.0.0.0"],
    },
    {
        params: ["010010"],
        result: ["0.10.0.10", "0.100.1.0"],
    },
]

resultArrEqual(tests, restoreIpAddresses)
