/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    const asd = [...nums].sort((a, b) => a - b);
    const des = [...nums].sort((a, b) => b - a);
    
    if (JSON.stringify(asd) === JSON.stringify(nums) || JSON.stringify(des) === JSON.stringify(nums)) {
        return true;
    }
    
    return false;
    
};