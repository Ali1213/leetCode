// Suppose you have a long flowerbed in which some of the plots are planted and some are not. However, flowers cannot be planted in adjacent plots - they would compete for water and both would die.

// Given a flowerbed (represented as an array containing 0 and 1, where 0 means empty and 1 means not empty), and a number n, return if n new flowers can be planted in it without violating the no-adjacent-flowers rule.

// Example 1:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: True
// Example 2:
// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: False
// Note:
// The input array won't violate no-adjacent-flowers rule.
// The input array size is in the range of [1, 20000].
// n is a non-negative integer which won't exceed the input array size.

//beat 8.14%
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if(n> Math.ceil(flowerbed.length/2)) return false;
    if(n === 0) return true;
    let isPlat = 0, len = flowerbed.length;
    let clot = 1;
    for(let i = 0;i< len;i++){
        if(flowerbed[i] === 1){
            if(clot>2){
                isPlat += (clot-1)/2 >> 0;
                if(isPlat>=n) return true;
            }
            clot = 0;
        }else{
            ++clot;
        }
    }
    if(++clot>2){
        isPlat += (clot-1)/2 >> 0;
        if(isPlat>=n) return true;
    }
    return false;
};


// beat 100%
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let isPlat = 0, len = flowerbed.length;
    let clot = 1,i=0;
    
    while(i<len){
        if(flowerbed[i] === 1){
            if(clot>2){
                isPlat += (clot-1)/2 >> 0;
            } 
            clot = 0;
        }else{
            ++clot;
        }
        ++i;
    }
    if(++clot>2){
        isPlat += (clot-1)/2 >> 0;
    }
    return isPlat>=n;
};