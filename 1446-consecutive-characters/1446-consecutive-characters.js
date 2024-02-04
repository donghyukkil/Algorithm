/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    if (s.length === 1) {
        return 1;
    }
    
    const obj = {};
    
    for (let i = 0; i < s.length; i++) {
        let count = 1;
        
        for (let j = i + 1; j < s.length; j++) {
            if (s[i] === s[j]) {
                count++;
                continue;
            }
            
            break;
        }
        
        if (!obj[s[i]] || count > obj[s[i]]) {
            obj[s[i]] = count;
        }
    }
    
    let result = 0;

    for (const [key, value] of Object.entries(obj)) {
        if (result < value) {
            result = value;
        }
    }
    
    return result;
};