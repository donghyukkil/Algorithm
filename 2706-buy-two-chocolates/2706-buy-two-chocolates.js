/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    const pricesCopy = [...prices];
    
    const minValue = Math.min(...pricesCopy);
    const pricesWithoutMin = pricesCopy.filter((ele, index) => index !== pricesCopy.indexOf(minValue));
    const secondMinValue = Math.min(...pricesWithoutMin);
    
    if (money - (minValue + secondMinValue) < 0) {
        return money;
    }
    
    return money - (minValue + secondMinValue);
};