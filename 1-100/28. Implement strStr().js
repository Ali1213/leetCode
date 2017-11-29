// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1


// beat 58.95%
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  return haystack.indexOf(needle);
};


// beat 47.65%
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let len = needle.length,
      l = haystack.length;
  if(!len){
      return 0;
  }
  
  for(let i = 0;i<l;i++){
      if(haystack[i] === needle[0]){
          if(haystack.slice(i,i+len) === needle){
              return i;
          }
      }
  }
  return -1;
};