/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num < 2) return true;
    
    let left = 2, right = num / 2;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (mid * mid === num) {
            return true;
        }
        
        if (mid * mid < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return false;
};