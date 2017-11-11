// Determine whether an integer is a palindrome. Do this without extra space.

// click to show spoilers.

// Some hints:
// Could negative integers be palindromes? (ie, -1)

// If you are thinking of converting the integer to string, note the restriction of using extra space.

// You could also try reversing an integer. However, if you have solved the problem "Reverse Integer", you know that the reversed integer might overflow. How would you handle such case?

// There is a more generic way of solving this problem.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if(x<0){
      return false;
  }
  let len = 1;
  while( x>=len ){
      len = len*10;
  }
  len = len/10;
  
  while (x >= 1){
      if(x%10 !== Math.floor(x/len)){
          return false;
      }
      x= Math.floor( (x-Math.floor(x/len)*len) /10);
      len = len/100;
  }
  return true
};

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  
if(x<0){
    return false
}
  let t = 0,
      n = x;
  
  while(n>0){
      t = t*10 + n%10;
      n = (n/10)>>0
  }
  return t === x
};