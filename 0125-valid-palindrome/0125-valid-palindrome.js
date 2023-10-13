/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {    
    const alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const originalStr = [...s].filter((x) => alphabets.includes(x.toLowerCase())).join("").toString().toLowerCase();
    
    if (originalStr.length === 1) {
        return true;
    }
    
    const container = [];
    
    for (let i = s.length - 1; i >= 0; i--) {
        if (!alphabets.includes(s[i].toLowerCase())) {
            continue;
        }
        
        container.push(s[i]);
    }
    
    const str = container.join("").toString().toLowerCase();
    
    return originalStr === str ? true : false;
};  