/**
 * @param {string} s
 * @return {string}
 */
// var toLowerCase = function(s) {
//     let str = "";
    
//     for (let i = 0; i < s.length; i++) {
//         str += s[i].toLowerCase();
//     }
    
//     return str;
// };

var toLowerCase = function(s) {
    let string = "";
    
    for (let i = 0; i < s.length; i++) {
        let charCode = s.charCodeAt(i);
        
        if (charCode < 91 && charCode > 64) {
            string += String.fromCharCode(charCode + 32);
        } else {
            string += s.charAt(i);
        }
    }
    
    return string;
}