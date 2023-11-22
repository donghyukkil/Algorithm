/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    const arr = nums.sort((a, b) => a - b);
    const result = {};
    
    let count = 1;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            count++;
        }
        
        if (arr[i] !== arr[i + 1]) {
            result[arr[i]] = count;
            count = 1;
            
            continue;
        }
    }
    
    return nums.sort((a, b) => {
        if (result[a] === result[b]) {
            return b - a;
        }
        
        return result[a] - result[b]
    });
};