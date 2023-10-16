/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let result = 0;
    
    for (let i = 0; i < accounts.length; i++) {
        let temp = accounts[i].reduce((acc, cur) => acc + cur, 0);
        
        result = Math.max(result, temp);
    }
    
    return result;
};