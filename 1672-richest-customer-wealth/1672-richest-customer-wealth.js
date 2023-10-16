/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let result = 0;
    
    for (let i = 0; i < accounts.length; i++) {
        if (result < accounts[i].reduce((acc, cur) => acc + cur, 0)) {
            result = accounts[i].reduce((acc, cur) => acc + cur, 0);
        }
    }
    
    return result;
};