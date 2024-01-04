/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    const newSet1 = new Set(nums1);
    const newSet2 = new Set(nums2);
    const newSet3 = new Set(nums3);
    
    const result = [];
    
    for (const value of newSet1) {
       if (newSet2.has(value) || newSet3.has(value)) {
           result.push(value);
       }
    }
    
    for (const value of newSet2) {
        if (newSet1.has(value) || newSet3.has(value)) {
            if (!result.includes(value)) {
                result.push(value);
            }
        }
    }
    
    for (const value of newSet3) {
        if (newSet1.has(value) || newSet2.has(value)) {
            if (!result.includes(value)) {
                result.push(value);
            }
        }
    }
    
    return result;
};