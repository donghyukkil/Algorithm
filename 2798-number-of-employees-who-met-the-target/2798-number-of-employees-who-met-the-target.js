/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let result = 0;
    
    hours.forEach((element) => {
        if (element >= target) {
            result++;
        }
    });
    
    return result;
};