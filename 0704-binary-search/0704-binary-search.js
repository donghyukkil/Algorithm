/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var search = function(nums, target) {    
//     let result;
//     let isTrue = false;
    
//     nums.forEach((ele, i) => {
//         if (ele === target) {
//             result = i;
//             isTrue = !isTrue;
//         }
//     });
    
//     if (isTrue) {
//         return result;
//     } else {
//         return - 1; 
//     }
// };

var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
};