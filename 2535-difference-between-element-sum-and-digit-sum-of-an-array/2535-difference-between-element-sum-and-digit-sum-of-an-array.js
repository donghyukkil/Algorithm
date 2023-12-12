/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    const elementSum = nums.reduce((acc, cur) => acc + cur, 0);
    
    let digitSum = 0;
    
    const array = [];
    
    for (let i = 0; i < nums.length; i++) {
        array.push(String(nums[i]));
    }
        
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            digitSum += Number(array[i][j]);
        }
    }
    
    return Math.abs(elementSum - digitSum);
};