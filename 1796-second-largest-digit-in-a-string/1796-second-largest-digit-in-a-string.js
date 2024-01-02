/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    const array = s.split("");
    let result = [];
    
    for (let i = 0; i < array.length; i++) {
        if ("0123456789".includes(array[i]) && !result.includes(Number(array[i]))) {
            result.push(Number(array[i]));
        }
    }
    
    if (result.length === 0 || result.length === 1) {
        return - 1;
    } 
    
    result = result.filter(ele => ele !== Math.max(...result));
    
    return Math.max(...result);
};