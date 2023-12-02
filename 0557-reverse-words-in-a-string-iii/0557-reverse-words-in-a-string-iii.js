/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const string = s.split(" ");
    const array = [];
    let answer = "";
    
    for (let i = 0; i < string.length; i++) {
        for (let j = string[i].length - 1; j >= 0; j--) {
            answer += string[i][j];
        }
        
        array.push(answer);
        answer = "";
    }
    
    return array.join(" ");
};