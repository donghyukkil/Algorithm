/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    const set = new Set(arr);
    const uniqueArr = [...set].sort((a, b) => a - b);
    
    const rankMap = new Map();
    
    uniqueArr.forEach((ele, index) => rankMap.set(ele, index + 1));
    
    const result = arr.map(ele => rankMap.get(ele));
    
    return result;
};