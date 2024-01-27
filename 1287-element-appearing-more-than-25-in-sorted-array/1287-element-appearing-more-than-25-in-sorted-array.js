/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    // 빈도수를 구한다.
    // 빈도수 / 전체 배열 길이 > 1 / 4 큰 요소를 리턴한다.
    const newMap = new Map();
    
    for (let i = 0; i < arr.length; i++) {
        newMap.set(arr[i], (newMap.get(arr[i]) || 0) + 1);
    }
    
    for (const [key, value] of newMap) {
        if (value / arr.length > 0.25) {
            return key;
        }
    }
};