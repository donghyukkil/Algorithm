/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    const map = new Map();
    
    for (const num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    
    const result = [];
    
    for (const [num, count] of map) {
        if (num === count) {
            result.push(num);
        }
    }
    
    return result.length > 0 ? Math.max(...result) : - 1;
//     const obj = {};
//     let count = 0;
    
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 count++;
//             }
//         }
        
//         obj[arr[i]] = count;
//         count = 0;
//     }
    
//     const result = [];
    
//     for (const key in obj) {
//         if (Number(obj[key]) === Number(key)) {
//             result.push(Number(key));
//         }
//     }
    
//     return result.length > 0 ? Math.max(...result) : - 1;
//     const obj = {};

//     for (let i = 0; i < arr.length; i++) {
//         obj[arr[i]] = (obj[arr[i]] || 0) + 1;
//     }

//     const result = [];

//     for (const key in obj) {
//         if (obj[key] === Number(key)) {
//             result.push(Number(key));
//         }
//     }

//     return result.length > 0 ? Math.max(...result) : -1;
};