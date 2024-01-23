/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const map = new Map();
    
    for (const n of nums) {
        map.set(n, (map.get(n) + 1 || 1));
    }
    
    for (const [key, value] of map) {
        if (value === 1) {
            return key;
        }
    }
};