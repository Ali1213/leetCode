// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

// If the last word does not exist, return 0.

// Note: A word is defined as a character sequence consists of non-space characters only.

// Example:

// Input: "Hello World"
// Output: 5


// beat 44.52%
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  if(s.length === 0){
      return 0;
  }
  
  let len = 0;
  for(let i = s.length-1; i>=0;i--){
      if(len === 0 && s[i] === ' '){
          continue;
      }
      len++;
      if(s[i-1] === ' ' || i === 0){
          return len;
      }
  }
  
  return 0;
};


// beat 95.41%
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  s = s.trim();
  if(s.length === 0){
      return 0;
  }
  
  let len = 0;
  for(let i = s.length-1; i>=0;i--){
      len++;
      if(s[i-1] === ' ' || i === 0){
          return len;
      }
  }
  
  return 0;
};