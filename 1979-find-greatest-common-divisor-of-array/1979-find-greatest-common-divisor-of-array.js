/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    const maxValue = Math.max(...nums);
    const minValue = Math.min(...nums);
    
    if (maxValue === minValue) {
        return maxValue;
    }
    
    if (maxValue % minValue === 0) {
        return minValue;
    }
    
    const result = [];
    
    for (let i = 1; i <= maxValue; i++) {
        if (maxValue % i === 0 && minValue % i === 0) {
            result.push(i);
        }
    } 
    
    return Math.max(...result);
};