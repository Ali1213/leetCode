// Related to question Excel Sheet Column Title

// Given a column title as appear in an Excel sheet, return its corresponding column number.

// For example:

//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28 
// Credits:
// Special thanks to @ts for adding this problem and creating all test cases.


/**
 * @param {string} s
 * @return {number}
 */

// beat 100%
var titleToNumber = function(s){
    var i = 0;
    var num = 0;
    while(i< s.length){
        num = s.charCodeAt(i) - 64 + 26 * num;
        i++;
    }
    return num;
}