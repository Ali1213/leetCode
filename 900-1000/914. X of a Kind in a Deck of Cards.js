/* In a deck of cards, each card has an integer written on it.

Return true if and only if you can choose X >= 2 such that it is possible to split the entire deck into 1 or more groups of cards, where:

Each group has exactly X cards.
All the cards in each group have the same integer.
 

Example 1:

Input: [1,2,3,4,4,3,2,1]
Output: true
Explanation: Possible partition [1,1],[2,2],[3,3],[4,4]
Example 2:

Input: [1,1,1,2,2,2,3,3]
Output: false
Explanation: No possible partition.
Example 3:

Input: [1]
Output: false
Explanation: No possible partition.
Example 4:

Input: [1,1]
Output: true
Explanation: Possible partition [1,1]
Example 5:

Input: [1,1,2,2,2,2]
Output: true
Explanation: Possible partition [1,1],[2,2],[2,2]

Note:

1 <= deck.length <= 10000
0 <= deck[i] < 10000 */


// beat 67.3%
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    if(deck.length<2) return false;
    let m = new Map()
    for(let i = 0; i< deck.length; i++){
        let v = m.get(deck[i]);
        m.set(deck[i], v? v + 1:1)
    }
    const Mgn = (num1,num2) => {  
        return num2!=0 ? Mgn(num2,num1%num2) : num1
    }  
    let s
    for(let v of m.values()){
        if(v<2) return false;
        if(!s) s = v;
        if(v % s !== 0) {
            let n = Mgn(v,s)
            if(n === 1) return false;
            s = n;
        }
    }
    return true
};




// beat 100.00%
// for of 和Map的效率果然有点差
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    if(deck.length<2) return false;
    let m = {}
    for(let i = 0; i< deck.length; i++){
        m[deck[i]] = m[deck[i]] ? m[deck[i]] + 1 : 1
    }
    const Mgn = (num1,num2) => {  
        return num2!=0 ? Mgn(num2,num1%num2) : num1
    }  
    let s
    let V = Object.values(m)
    for(let i = 0; i< V.length; i++){
        if(V[i]<2) return false;
        if(!s) s = V[i];
        if(V[i] % s !== 0) {
            let n = Mgn(V[i],s)
            if(n === 1) return false;
            s = n;
        }
    }
    return true
};