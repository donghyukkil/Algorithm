/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const str = x.toString();
    let result = "";
    
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    
    const reverseNum = parseInt(result, 10);
    
    if (reverseNum < Math.pow(-2, 31) || reverseNum > Math.pow(2, 31) - 1) {
        return 0;
    }
    
    if (x < 0) {
        return - Number(result.slice(0, result.length - 1));
    }
    
    
    return result;
};