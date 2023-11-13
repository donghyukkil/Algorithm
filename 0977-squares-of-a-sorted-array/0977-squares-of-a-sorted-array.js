/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const ans = nums.map((ele) => ele * ele).sort((a, b) => a - b);
    
    return ans;
};