/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const productOfDigits = [...n.toString()].reduce((acc, cur) => Number(acc) * Number(cur), 1);
    const sumOfdigits = [...n.toString()].reduce((acc, cur) => Number(acc) + Number(cur), 0);
    
    return productOfDigits - sumOfdigits;
};