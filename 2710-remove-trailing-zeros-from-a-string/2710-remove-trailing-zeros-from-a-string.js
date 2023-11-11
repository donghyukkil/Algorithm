/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    const arr = [...num];
    let index;
        
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] !== "0") {
            index = i;
            break;
        }
    }
    
    return arr.splice(0, index + 1).join("");
};