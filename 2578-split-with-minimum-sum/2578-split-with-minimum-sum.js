/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function(num) {
    const originalArray = num.toString().split("");
    const result = [];
    
    const foo = (params) => {
         if (params.length === 0) {
            return result;
        }
        
        result.push(Math.min(...params));
        const index = params.indexOf(Math.min(...params).toString());
        const newArray = params.filter((ele, idx) => idx !== index);
        return foo(newArray);    
    };
    
    foo(originalArray);
    
    let evenIndex = "";
    let oddIndex = "";
    
    for (let i = 0; i < result.length; i++) {
        if (i === 0 || i % 2 === 0) {
            evenIndex += result[i];
        } else {
            oddIndex += result[i];
        }
    }
    
    return Number(evenIndex) + Number(oddIndex);
};