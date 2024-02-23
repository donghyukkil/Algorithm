/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {    
    if (k === 0) {
        return new Array(code.length).fill(0);
    }
    
    
    const result = new Array(code.length).fill(0);
    
    if (k > 0) {
        for (let i = 0; i < code.length; i++) {
            let sum = 0;
            
            for (let j = 1; j <= k; j++) {
                sum += code[(i + j) % code.length];
            }
            
            result[i] = sum;
        }
    } else {
         for (let i = 0; i < code.length; i++) {
            let sum = 0;
            
            for (let j = 1; j <= Math.abs(k); j++) {
                 result[i] += code[(i - j + code.length) % code.length];
            }
        }
    }
    
    return result;
    
};