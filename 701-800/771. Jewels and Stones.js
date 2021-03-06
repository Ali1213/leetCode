/*
 You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: J = "aA", S = "aAAbbbb"
Output: 3
Example 2:

Input: J = "z", S = "ZZ"
Output: 0
Note:

S and J will consist of letters and have length at most 50.
The characters in J are distinct. 
*/


// beat 58.93%
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let s = new Set()
    for(let i = 0; i< J.length; i++){
        s.add(J[i])
    }
    
    let m = 0;
    for(let i=0; i<S.length; i++){
        
        if(s.has(S[i])){
            m = m + 1;
        }
    }
    
    return m;
};


// beat 99.56%
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    
    let m = 0;
    for(let i=0; i<S.length; i++){
        
        if(J.indexOf(S[i]) > -1){
            m = m + 1;
        }
    }
    
    return m;
};

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    
    let s = {}
    
    
    for(let i = 0; i<J.length; i++){
        s[J[i]] = 1;
    }
    
    
    let m = 0;
    for(let i=0; i<S.length; i++){
        
        if(s[S[i]] === 1){
            m = m + 1;
        }
    }
    
    return m;
};