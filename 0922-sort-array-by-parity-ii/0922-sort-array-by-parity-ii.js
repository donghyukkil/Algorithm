/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let j = 1;
    
    for (let i = 0; i < nums.length; i += 2) {
        if (nums[i] % 2 !== 0) {
            while (nums[j] % 2 !== 0) {
                j += 2;
            }
            
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }
    
    return nums;
};