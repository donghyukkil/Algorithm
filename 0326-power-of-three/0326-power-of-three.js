/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n <= 0 || n === 6) {
        return false;
    }
    
    if (n === 1) {
        return true;
    }
    
    if (n > 0 && n < 10) {
        return n % 3 === 0;
    }
    
    return isPowerOfThree (n / 3);
};