/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    let str = "";
    
    for (let i = 0; i < words.length; i++) {
        str += words[i][0];
    }
    
    return str === s ? true : false;
};