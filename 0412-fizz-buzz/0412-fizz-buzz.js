/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const result = [];
    
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0) {
            if (i % 5 === 0) {
                result.push("FizzBuzz");
                continue;
            }
            
             result.push("Fizz");
            continue;
        }
        
        if (i % 5 === 0) {
            result.push("Buzz");
            continue;
        }
        
        result.push(i.toString());
    }
    
    return result;
};