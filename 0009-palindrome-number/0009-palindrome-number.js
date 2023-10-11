/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const str = x.toString();
    const arr = [];
    
    for (let i = str.length - 1; i >= 0; i--) {
        arr.push(str[i]);
        
        continue;
    }
    const reverseStr = arr.join("");
        
    return str === reverseStr ? true : false;
};