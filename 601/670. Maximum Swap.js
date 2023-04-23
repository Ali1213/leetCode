/* Given a non-negative integer, you could swap two digits at most once to get the maximum valued number. Return the maximum valued number you could get.

Example 1:
Input: 2736
Output: 7236
Explanation: Swap the number 2 and the number 7.
Example 2:
Input: 9973
Output: 9973
Explanation: No swap.
Note:
The given number is in the range [0, 108] */

// beat 97.3%
/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    let s = [];
    let v = num;
    while(num>0){
        let n = num % 10;
        s.push(n);
        num = (num - n)/10
    }
    s = s.reverse()
    
    let i = 0;
    while(i< s.length - 1){
        
        if(s[i] !== 9){
            let max = s[i], pos = i
            for(let j = i + 1; j< s.length; j++){
                if(s[j]>=max){
                    max = s[j];
                    pos = j;
                }
            }
            if(max>s[i]) {
                let temp = s[i]
                s[i] = s[pos]
                s[pos] = temp;
                return Number(s.join(''))
            }
            
        }
        i++;
    }
    return Number(s.join(''))
};