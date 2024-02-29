/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

function countChars(str) {
    const charMap = new Map();
        
    for (let char of str) {
        charMap.set(char, (charMap.get(char) || 0) + 1);
    }
        
    return charMap;
}

var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    const sCharCount = countChars(s);
    const tCharCount = countChars(t);
    
    for (let [char, count] of sCharCount) {
        if(tCharCount.get(char) !== count) {
            return false;
        }
    }
    
    return true;
};