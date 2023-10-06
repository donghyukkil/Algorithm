/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    const result = [];
    
    const kelvin = celsius + 273.15;
    const Fahrenheit = celsius * 1.80 + 32.00;
    
    result.push(kelvin, Fahrenheit);
    
    return result;
};