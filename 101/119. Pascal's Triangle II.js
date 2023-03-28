// Given an index k, return the kth row of the Pascal's triangle.

// For example, given k = 3,
// Return [1,3,3,1].

// Note:
// Could you optimize your algorithm to use only O(k) extra space?


// 方法1： 查询网上有关Pascal's triangle
// 帕斯卡三角形的第n行第m个元素是 C(n, m) = n!/(m! * (n-m)!)。所以 C(n, m-1) = n!/((m-1)! * (n-m+1)!)，所以 C(n, m) = C(n, m-1) * (n-m+1) / m


// beat 100%
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let r = new Array(rowIndex+1);
  r[0] = 1;
  r[rowIndex] = 1;
  let i = 0;
  let half = r.length/2 >> 0;
  while(++i<=half){
      r[i] = r[rowIndex-i] = r[i-1] * (rowIndex-i+1) / i;
  }
  return r;
};


// 原理
// 每一行的结果可以由上一行和上一行的偏移相加得到。例如求第4行：

//     1 3 3 1 0 
//  +  0 1 3 3 1
//  =  1 4 6 4 1 
// beat 100%
var getRow = function(rowIndex) {
  let r = new Array(rowIndex+1);
  r.fill(0);
  r[0] = 1;
  if(rowIndex>0) r[1] = 1;
  let i = 0;
  while(++i<rowIndex){
      for(let y=i+1;y>0;y--){
          r[y] = r[y]+ r[y-1];
      }
  }
  return r;
};