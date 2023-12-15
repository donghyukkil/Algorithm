/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// selection sort
// var moveZeroes = function(nums) {
//     let answer = nums;
    
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] === 0 && nums[j] !== 0) {
//                 [nums[i], nums[j]] = [nums[j], nums[i]];
//             }
//         }
//     }
    
//     return answer;
// };

// two pointers
var moveZeroes = function (nums) {
    let low = 0;
    let high = low + 1;
    
    while (high <= nums.length - 1) {
        if (nums[low] !== 0) {
            low++;
            high++;
        } else {
            if (nums[high] !== 0) {
                [nums[low], nums[high]] = [nums[high], nums[low]];
                low++;
            }
            
            high++;
        }
    }
};