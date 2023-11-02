/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const obj = {};
    let count = 0;
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                count++;
            }
        }
        
        obj[nums[i]] = count;
        count = 0;
    }
    
    let maxCount = 0;
    let majorityElement = nums[0];
    
     for (let num in obj) {
        if (obj[num] > maxCount) {
            maxCount = obj[num];
            majorityElement = parseInt(num);
        }
    }
    
    return majorityElement;
};