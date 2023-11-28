/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    for (let i = 0, result = 0; result < n; i++) {
        result = Math.pow(2, i);
        
        if (result === n) {
            if (result === 1 || result % 2 === 0) {
                return true;
            }
        }
    }
    
    return false;
};