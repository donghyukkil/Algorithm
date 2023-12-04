/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    const array = [...sentences];
    
    let maxValue = Number.MIN_SAFE_INTEGER;
    
    for (let i = 0; i < array.length; i++) {
        if (array[i].split(" ").length > maxValue) {
            maxValue =  array[i].split(" ").length;
        }
    }
    
    return maxValue;
};