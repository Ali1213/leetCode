
/* Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
 */

 /**
 * @param {string} s
 * @return {boolean}
 */

 //beat %95.3 of javascript
var isValid = function(s) {
  
  if(s.length%2){
      return false
  }
  
  let antiDict = {
      '(':')',
      '{':'}',
      '[':']'
  };
  let en = "";
  
  for( let i of s){
      if(antiDict[i]){
         en += antiDict[i];
      }else{
          if(en[en.length-1] === i){
              en = en.slice(0,-1);
          }else{
              return false;
          }
      }
  }
      
  return !en;
  
};


/**
 * @param {string} s
 * @return {boolean}
 */

 //beat %95.63 of javascript
var isValid = function(s) {
  
  if(s.length%2){
      return false
  }
  
  
  let store = []
  
  for(let i of s){
      
      switch (i){
          case '(':
              store.push(')')
              break;
          case '{':
              store.push('}')
              break;
          case '[':
              store.push(']')
              break;
          default:
              if(store.pop() !== i){
                  return false;
              }
      }
      
  }
  
  return store.length === 0;
};