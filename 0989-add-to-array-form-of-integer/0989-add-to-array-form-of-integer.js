/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    const number = BigInt(num.join("")) + BigInt(k);
    
    return number.toString().split("");
};