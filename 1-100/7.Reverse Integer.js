/*
Given a 32-bit signed integer, reverse digits of an integer.

    Example 1:

Input: 123
Output:  321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
    Assume we are dealing with an environment which could only hold integers within the 32-bit signed integer range. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/

var method1 = function(x) {
    let isNegative;

    if(x < 0){
        isNegative = true;
        x = 0 - x;
    }

    let ans = (x+'').split('').reverse().join('');

    x = isNegative ? 0 - ans : parseInt(ans,10);

    return x > 2147483647 || x < -2147483648 ? 0 : x ;
};

var method2 = function(x) {

    let isNegative,answer=0;

    if(x < 0){
        isNegative = true;
        x = 0 - x;
    }

    let arr = [];

    while( x > 0 ){
        let b = Math.floor(x/10);
        arr.push( x - b *10 )
        x = b;
    }

    for(let i=0,len = arr.length;i<len;i++){
        answer += Math.pow(10,len-i-1)*arr[i];
    }

    answer = isNegative ? 0 - answer : answer;

    return answer > 2147483647 || answer < -2147483648 ? 0 : answer ;

};


//还是递归的思想好啊
var method = function(x) {

    let isNegative = 1,answer=0;

    if(x < 0){
        isNegative = -1;
        x = 0 - x;
    }

    while(x>0){
        answer = answer * 10 + x%10;
        x = Math.floor(x/10);
    }





    return answer > 2147483647 ? 0 : answer*isNegative ;

};