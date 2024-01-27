/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    const n = nums.length;
    
    for (let i = 0; i < n; i++) {
        let leftSum = 0;
        let rightSum = 0;
        
        for (let j = 0; j < i; j++) {
            leftSum += nums[j];
        }
        
        for (let k = i + 1; k < n; k++) {
            rightSum += nums[k];
        }
        
        if (leftSum === rightSum) {
            return i;
        }
    }
    
    return - 1;
};