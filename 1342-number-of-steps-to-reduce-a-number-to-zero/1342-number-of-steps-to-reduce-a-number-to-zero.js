/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let step = 0;
    
    return isEvenNumber(num);
    
    function isEvenNumber (number) {
        if (number === 0) {
            return step;
        }
        
        if (number % 2 === 0) {
            step++;
            return isEvenNumber(number / 2);
        }
        
        step++;
        
        return isEvenNumber(number - 1);
    }
};