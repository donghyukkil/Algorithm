/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let negativeValue = 0;
    let positiveValue = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            negativeValue++;
            continue;
        } 
        
        if (nums[i] > 0) {
            positiveValue++;
        }
    }
    
    return Math.max(negativeValue, positiveValue);
};