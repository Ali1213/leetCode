// Given two binary strings, return their sum (also a binary string).

// For example,
// a = "11"
// b = "1"
// Return "100".

//wrong
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  if(a.length === 0){
     return b;
  }
  
  if(b.length ===0){
      return a;
  }
  let result = parseInt(a,2) + parseInt(b,2);
  return result.toString(2);
        
};