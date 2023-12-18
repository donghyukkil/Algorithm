/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let count = 0;
    
    for (ele of details) {
        if (Number(ele[11] + ele[12]) > 60) {
            count++;
        }
    }
    
    return count;
};