/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let answer, sum = 0;
    
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    
    answer = sum;
    
    for (let i = k; i < nums.length; i++) {
        sum += (nums[i] - nums[i - k]);
        answer = Math.max(answer, sum);
    }
    
    return answer / k;
};