/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    let str = "";
    
    for (let i = 0; i < s.length; i++) {
        str += s[i].toLowerCase();
    }
    
    return str;
};