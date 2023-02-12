/* Implement int sqrt(int x).

Compute and return the square root of x.

x is guaranteed to be a non-negative integer.


Example 1:

Input: 4
Output: 2
Example 2:

Input: 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we want to return an integer, the decimal part will be truncated. */

// beat 61.41%
var mySqrt = function(x) {
  let k = x;
  while(k*k-x>1e-3){
      k = (k+x/k)/2;
  }
  return Math.floor(k);
};

//beat 87.25%
var mySqrt = function(x) {
  let k = x;
  while(k*k-x>0.1){
      k = (k+x/k)/2;
  }
  return Math.floor(k);
};