/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    const result = Array(nums.length * 2);
    
    for (let i = 0; i < result.length; i++) {
        i >= nums.length ? (result[i] = nums[i - nums.length]) : (result[i] = nums[i]);
    }
    
    return result;
};