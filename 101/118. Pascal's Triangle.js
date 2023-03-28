// Given numRows, generate the first numRows of Pascal's triangle.

// For example, given numRows = 5,
// Return

// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

// beat 100%
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if(numRows === 0)return [];
  let ups = [1];
  let rs = [ups];
  while(--numRows>0){
      let downs = [1];
      for(let i =0;i<ups.length-1;i++){
          downs.push(ups[i]+ups[i+1]);
      }
      downs.push(1);
      ups = downs;
      rs.push(downs);
  }
  return rs;
};