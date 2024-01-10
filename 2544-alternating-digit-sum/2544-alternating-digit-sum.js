/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    const array = n.toString().split("");
    
    let result = 0;
    
    for (let i = 0; i < array.length; i++) {
        if (i === 0 || i % 2 === 0) {
            result += Number(array[i]);
        } else {
            result += - Number(array[i]);
        }
    }
    
    return result;
};