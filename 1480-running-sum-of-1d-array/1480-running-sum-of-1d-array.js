/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const result = [];
    let calculateNums = 0;
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j <= i; j++) {
            calculateNums += nums[j];
        }
        
         result.push(calculateNums);
         calculateNums = 0;
    }
    
    return result;
};