/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    const result = [];
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === result[result.length - 1] && s[i] === result[result.length - 1 - 1]) {
            continue;
        }
        
        result.push(s[i]);
    }
    
    return result.join("");
};