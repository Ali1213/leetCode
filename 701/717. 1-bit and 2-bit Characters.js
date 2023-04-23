// We have two special characters. The first character can be represented by one bit 0. The second character can be represented by two bits (10 or 11).

// Now given a string represented by several bits. Return whether the last character must be a one-bit character or not. The given string will always end with a zero.

// Example 1:
// Input: 
// bits = [1, 0, 0]
// Output: True
// Explanation: 
// The only way to decode it is two-bit character and one-bit character. So the last character is one-bit character.
// Example 2:
// Input: 
// bits = [1, 1, 1, 0]
// Output: False
// Explanation: 
// The only way to decode it is two-bit character and two-bit character. So the last character is NOT one-bit character.
// Note:

// 1 <= len(bits) <= 1000.
// bits[i] is always 0 or 1.

// beat 93.33%
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    let n = bits.length;
    if(bits[n-1] === 1) return false;
    
    let store = 0; let next=0; 
    for(let i=0;i<n;i++){
        if(store === 1){
            store = 0;
            next = 10 + bits[i];
        }else{
            if(bits[i] === 1) store = 1;
            next = 0;
        }
    }
    return next === 0;
};


/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    let n = bits.length;    
    let store = false; let rB=true; 
    for(let i=0;i<n;i++){
        if(store){
            store = false;
            rB = false;
        }else{
            if(bits[i] === 1) store = true;
            rB = true;
        }
    }
    return rB;
};

// beat 76.67%
/**
 * @param {number[]} bits
 * @return {boolean}
 */

var isOneBitCharacter = function(bits) {
    var i = 0;
    let zero = true;

    while(i < bits.length){
        if(bits[i] === 1){
            i += 2;
            zero = false;
        }else{
            i++;
            zero = true;
        }
    }
    return zero;
};