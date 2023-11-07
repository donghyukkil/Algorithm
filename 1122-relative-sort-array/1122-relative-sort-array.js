/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    const sortedArray1 = [...arr1].sort((a,b) => a - b);
    
    const result = [];
    
    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (arr1[j] === arr2[i]) {
                result.push(arr2[i]);
                
                continue;
            }
        }
    }
    
    const answer = [...result];
    
    for (let i = 0; i < sortedArray1.length; i++) {
        if (!result.includes(sortedArray1[i])) {
            answer.push(sortedArray1[i]);
        }
    }
    
    return answer;
};