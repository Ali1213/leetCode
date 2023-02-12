/* You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.


Example 1:

Input: 2
Output:  2
Explanation:  There are two ways to climb to the top.

1. 1 step + 1 step
2. 2 steps
Example 2:

Input: 3
Output:  3
Explanation:  There are three ways to climb to the top.

1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step */

// beat 2.94%
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let yfy = 1, y = 2;
  if(n<=0) return 0;
  if(n == 1) return yfy;
  if(n == 2) return y;
  for(let i = 2;i<n;i++){
      [y,yfy] = [y+yfy,y]
  }
  return y;
};

// beat 51.63%
// 看来解构赋值的效率还是挺惨的
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let yfy = 1, y = 2;
  if(n<=0) return 0;
  if(n == 1) return yfy;
  if(n == 2) return y;
  for(let i = 2;i<n;i++){
      let temp = y+yfy;
      yfy = y;
      y = temp;
  }
  return y;
};

// beat 47.06%
var climbStairs = function(n) {
  if(n<=0) return 0;
  let a = new Array(n);
  a[0] = 1;
  a[1] = 2;
  
  for(let i = 2;i<n;i++){
      a[i] = a[i-2] + a[i-1]
  }
  return a[n-1];
};

//beat 19.93%
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if(n<=0) return 0;
  let a =[1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765,10946,17711,28657,46368,75025,121393,196418,317811,514229,832040,1346269];
  let len = a.length;
  while(n>len){
      a.push(a[len-1]+a[len-2]);
      len = a.length;
  }
  return a[n-1];
};


// beat 64.71%
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if(n<=0) return 0;
  let a =[1,2];
  let len = a.length;
  while(n>len){
      a.push(a[len-1]+a[len-2]);
      len = a.length;
  }
  return a[n-1];
};