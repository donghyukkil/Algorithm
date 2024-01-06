/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let array = [...nums];
    
    const firstValue = Math.max(...array);
    
    array = array.filter(ele => ele !== firstValue);
    
    const secondValue = Math.max(...array);
    
    array = array.filter(ele => ele !== secondValue);
    
    if (!array.length) {
        return Math.max(...nums);
    }
    
    return Math.max(...array);
};