/*
Write a program that outputs the string representation of numbers from 1 to n.

    But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

Example:

    n = 15,

        Return:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]
*/

/**
 * Runtime: 60 ms, faster than 79.76% of JavaScript online submissions for Fizz Buzz.
 * Memory Usage: 37.4 MB, less than 50.00% of JavaScript online submissions for Fizz Buzz.
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz1 = function (n) {
    let i = 1;
    const r = new Array(n - 1);

    while (i <= n) {
        if (i % 3 === 0 || i % 5 === 0) {
            if (i % 3 !== 0) {
                r[i - 1] = 'Buzz';
            } else if (i % 5 !== 0) {
                r[i - 1] = 'Fizz';
            } else {
                r[i - 1] = 'FizzBuzz';
            }
        } else {
            r[i - 1] = String(i);
        }
        i++;
    }
    return r;
};

/*
* Runtime: 56 ms, faster than 93.34% of JavaScript online submissions for Fizz Buzz.
* Memory Usage: 37.4 MB, less than 45.00% of JavaScript online submissions for Fizz Buzz.
* */
const fizzBuzz = function (n) {
    let i = 1;
    const r = new Array(n - 1);
    let buzz = 1;
    let fizz = 1;
    while (i <= n) {
        if (buzz === 5 && fizz === 3) {

            r[i - 1] = 'FizzBuzz';
            buzz = 0;
            fizz = 0;
        } else if (buzz === 5) {
            r[i - 1] = 'Buzz';
            buzz = 0;
        } else if( fizz === 3) {
            r[i - 1] = 'Fizz';
            fizz = 0;
        } else {
            r[i - 1] = String(i);
        }
        buzz ++;
        fizz ++;
        i++;
    }
    return r;
};


const assert = require('assert');

const test = [
    [15, [
        '1',
        '2',
        'Fizz',
        '4',
        'Buzz',
        'Fizz',
        '7',
        '8',
        'Fizz',
        'Buzz',
        '11',
        'Fizz',
        '13',
        '14',
        'FizzBuzz',
    ]],
];

test.forEach(([A, r], index) => {
    try {
        assert.deepEqual(fizzBuzz(A), r);
    } catch (e) {
        console.log(`${index} occur error`);
        console.log(e);
        throw e;
    }
});
