/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
//     const map = new Map();
    
//     for (const num of arr) {
//         if (map.has(num)) {
//             map.set(num, map.get(num) + 1);
//         } else {
//             map.set(num, 1);
//         }
//     }
    const obj = {};
    let count = 0;
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        
        obj[arr[i]] = count;
        count = 0;
    }
    
    const result = [];
    
    for (const key in obj) {
        if (Number(obj[key]) === Number(key)) {
            result.push(Number(key));
        }
    }
    
    return result.length > 0 ? Math.max(...result) : - 1;
};