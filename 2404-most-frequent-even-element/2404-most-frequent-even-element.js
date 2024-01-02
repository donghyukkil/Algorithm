/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    const result = nums.filter(ele => ele % 2 === 0);
    
    if (result.length === 0) {
        return - 1;
    }
    
    const map = new Map();
    
    for (const num of result) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    
   
    let maxFreq = 0;
    let maxEvenElement = -1;

    for (const [num, count] of map) {
        if (count > maxFreq || (count === maxFreq && num < maxEvenElement)) {
            maxFreq = count;
            maxEvenElement = num;
        }
    }

    return maxEvenElement;
};