
// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).

// beat 100%
// 改版之后每次都是100%  都没有意思了
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let interest = 0;
  if(prices===null || prices.length === 0) return interest;
  let min = Number.MAX_VALUE;
  for(let i=0,len=prices.length;i<len;i++){
      if(prices[i]>min){
          interest += prices[i] - min;
          min = prices[i];
      }else{
          min = prices[i];
      }
  }
  return interest;
};