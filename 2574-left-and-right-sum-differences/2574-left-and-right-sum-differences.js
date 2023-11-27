/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    if (nums.length === 1) {
        return [0];
    }
    
    const leftSum = [];
    const rightSum = [];
    const answer = [];
    let result = 0;
    
    leftSum[0] = 0
    
    for (let i = 0; i < nums.length - 1; i++) {
        leftSum[i + 1] = result + nums[i];
        result += nums[i];
    }
    
    result = 0;
    
    rightSum[nums.length - 1] = 0;
    
    for (let i = 1; i < nums.length; i++) {
        rightSum[nums.length - 1 - i] = result + nums[nums.length - i];
        result += nums[nums.length - i]
    }
    
    for (let i = 0; i < leftSum.length; i++) {
        answer.push(Math.abs(leftSum[i] - rightSum[i]));
    }
    
    return answer;
};