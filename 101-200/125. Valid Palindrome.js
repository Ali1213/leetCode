// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// For example,
// "A man, a plan, a canal: Panama" is a palindrome.
// "race a car" is not a palindrome.

// Note:
// Have you consider that the string might be empty? This is a good question to ask during an interview.

// For the purpose of this problem, we define empty string as valid palindrome.

// beat 100%
/**
 * @param {string} s
 * @return {boolean}
 */
var lowCase = (s,n) => {
  let code = s.charCodeAt(n);
  if(code<=90 && code>=65){
      return code+32;
  }else if (code<=122 && code>=97 || code<=57 && code>=48){
      return code;
  }else{
      return null
  }
}

var isPalindrome = function(s) {
  let i=0,j=s.length-1;
  while(i<j){
      let head = lowCase(s,i);
      let tail = lowCase(s,j);
      if(head && tail){
          if(head !== tail)return false;
          i++;
          j--;
      }
      if(!head) i++;
      if(!tail) j--;
  }
  return true;
};