/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    const result = [];
    
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(separator)) {
            words[i].split(separator).forEach((ele) => result.push(ele));
            
            continue;
        }
        
        result.push(words[i]);
    }
    
    return result.includes("") ? result.filter(ele => ele !== "") : result;
};