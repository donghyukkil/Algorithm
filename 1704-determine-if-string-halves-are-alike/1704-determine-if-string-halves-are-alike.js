/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    const middle = s.length / 2;
    
    const a = s.slice(0, middle);
    const b = s.slice(middle);
        
    const countVowels = (str) => {        
        let count = 0;
        
        for (let i = 0; i < str.length; i++) {
            if (vowels.includes(str[i])) {
                count++;
            }
        }
        
        return count;
    }
    
    return countVowels(a) === countVowels(b) ? true : false;
};