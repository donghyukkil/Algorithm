/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    const string = num.toString();
    
    if (string.length === 1) {
        return num;
    }
    
    let sumOfDigits = 0;
    
    for (let s of string) {
        sumOfDigits += Number(s);
    }
    
    return addDigits(Number(sumOfDigits));
};