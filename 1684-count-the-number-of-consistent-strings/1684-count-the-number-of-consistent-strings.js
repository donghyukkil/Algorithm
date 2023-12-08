/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    const map = new Set([...allowed]);
    let count = 0;
    
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (!map.has(words[i][j])) {
                count++
                break;
            }

        }
    }
    
    return words.length - count;
};