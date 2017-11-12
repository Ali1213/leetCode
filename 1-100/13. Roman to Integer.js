/* Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999. 
*/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var dict = {
      'I':1,
      'V':5,
      'X':10,
      'L':50,
      'C':100,
      'D':500,
      'M':1000,
  };

  let nums = [];
  
  for(let o of s){
    nums.push(dict[o]);
  }
  let num = 0;
  for(let i = 0,len = nums.length; i<len;i++){
    if(nums[i] < nums[i+1]){
      num -= nums[i];
    }else{
      num += nums[i];
    }
  }
  return num;
};