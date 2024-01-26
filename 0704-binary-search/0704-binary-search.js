/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {    
    let result;
    let isTrue = false;
    
    nums.forEach((ele, i) => {
        if (ele === target) {
            result = i;
            isTrue = !isTrue;
        }
    });
    
    if (isTrue) {
        return result;
    } else {
        return - 1; 
    }
};