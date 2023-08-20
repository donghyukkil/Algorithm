/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const result = [];
    
    for (let i = 0; i < arr.length; i++) {
        console.log(fn(arr[i], i))
        if (fn(arr[i], i)) {
            result.push(arr[i]);
            
        }
    }
    
    return result;
};