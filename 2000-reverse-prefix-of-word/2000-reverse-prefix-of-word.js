/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    if (word.indexOf(ch) === - 1) {
        return word;
    } 
    
    let str = "";
    
    for (let i = word.indexOf(ch); i >= 0; i--) {
        str += word[i];
    }
    
    return str + word.slice(word.indexOf(ch) + 1);
};