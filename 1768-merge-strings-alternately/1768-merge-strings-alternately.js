/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let result = "";
    let index = "";
    
    const arr1 = word1.split("");
    const arr2 = word2.split("");
    
    for (let i = 0; i < arr1.length; i++) {
        result += arr1[i];
        
        if (!!arr2[i]) {
            result += arr2[i];
            index = i;  
        }
    }
    
    if (arr2.length > arr1.length) {
        return result + arr2.slice(index + 1).join("");  
    }
    
    return result;
};