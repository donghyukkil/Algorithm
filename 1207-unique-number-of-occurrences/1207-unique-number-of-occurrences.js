/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const uniqueArray = [...new Set(arr)];
    
    const obj = {};
    
    for (let i = 0; i < uniqueArray.length; i++) {
        let count = 0;
        
        for (let j = 0; j < arr.length; j++) {
            if (uniqueArray[i] === arr[j]) {
                count++;
            }
        }
        
        obj[uniqueArray[i]] = count;
    }
    
    const result = [];
    
    for (const key in obj) {
        if (result.includes(obj[key])) {
            return false;
        }
        
        result.push(obj[key]);
    }
    
    return true;
}; 