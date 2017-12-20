/* The count-and-say sequence is the sequence of integers with the first five terms as following:

1.     1
2.     11
3.     21
4.     1211
5.     111221
1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.
Given an integer n, generate the nth term of the count-and-say sequence.

Note: Each term of the sequence of integers will be represented as a string.

Example 1:

Input: 1
Output: "1"
Example 2:

Input: 4
Output: "1211" */


// beat 54.36%
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let v = "1";
  if(n === 1) return v;
  let i = 1;
  while(i<n){
      i++;
      v = say(v);
  }
  return v;
  function say(v){
      let str = '', count = 0;
      for(let i = 0;i<v.length;i++){
          if(v[i] === v[i+1]){
              count++;
          } else {
              str+= (count === 0 ? '1'+v[i] : (count+1) + v[i] );
              count = 0;
          }
      }
      return str;
  }
};

