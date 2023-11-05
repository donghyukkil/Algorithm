/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const result1 = [];
    const result2 = [];
    
    for (let i = 0; i < nums1.length; i++) {
        if (nums2.includes(nums1[i])) {
            continue;
        }
        
        if (!result1.includes(nums1[i])) {
            result1.push(nums1[i]);
        }
        
    }
    
    for (let i = 0; i < nums2.length; i++) {
        if (nums1.includes(nums2[i])) {
            continue;
        }
        
        if (!result2.includes(nums2[i])) {
            result2.push(nums2[i]);
        }
    }
    
    return [result1, result2];
};