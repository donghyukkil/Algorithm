/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    const index = nums.indexOf(pivot);
    const result = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < nums[index]) {
            result.push(nums[i]);
        }
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === pivot) {
            result.push(nums[i]);
        }
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[index]) {
            result.push(nums[i]);
        }
    }
    
    return result;
};