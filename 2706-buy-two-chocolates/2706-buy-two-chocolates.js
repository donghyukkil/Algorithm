/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    const array = [...prices];
    
    const minValue = Math.min(...array);
    const filteredArray = array.filter((ele, index) => index !== array.indexOf(minValue));
    const secondMinValue = Math.min(...filteredArray);
    
    if (money - (minValue + secondMinValue) < 0) {
        return money;
    }
    
    return money - (minValue + secondMinValue);
};