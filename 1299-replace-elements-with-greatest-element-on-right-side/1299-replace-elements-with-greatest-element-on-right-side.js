/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    const array = [...arr];
    let maxValue = array[1];
    
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] > maxValue) {
                maxValue = array[j];
            }
        }
        
        array[i] = maxValue;
        maxValue = 0;
    }
    
    array[array.length - 1] = - 1;
    
    return array;
};