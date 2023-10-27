/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    const result = [];
    let str = "";
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === " " || i === s.length - 1) {
            if (i === s.length - 1) {
                str += s[i];  
            }
            
            if (result.length < k) { 
                result.push(str);
                str = "";
            } else {
                break;
            }
            continue;
        }
        
        str += s[i];
    }
    
    return result.join(" ");
};
