/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let count = 0;
    const result = [];
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                continue;
            }
            
            if (nums[i] > nums[j]) {
                count++;
            }
        }
        
        result.push(count);
        count = 0;
    }
    
    return result;
};