/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    const array = nums;
    
    if (array.indexOf(val) === -1) {
        return nums.length;
    }
    
    array.splice(array.indexOf(val), 1);
    
    return removeElement(array, val);
};