// Given a positive integer, return its corresponding column title as appear in an Excel sheet.

// For example:

//     1 -> A
//     2 -> B
//     3 -> C
//     ...
//     26 -> Z
//     27 -> AA
//     28 -> AB 


// beat 100%
/**
 * @param {number} n
 * @return {string}
 */

const char = (num) => String.fromCharCode(65 + num);

const convertToTitle = function(num){
    let s = '';
    while(num>0){
        let plus = (num-1)%26;
        s  =  char(parseInt(plus)) + s;
        num = ((num-1)/26)>>0;
    }
    return s;
};
