/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    const result = [];
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[i].toString().length; j++) {
            result.push(nums[i].toString()[j]);
        }
    }
    
    return result;
};