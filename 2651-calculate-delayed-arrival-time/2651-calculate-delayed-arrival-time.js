/**
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 */
var findDelayedArrivalTime = function(arrivalTime, delayedTime) {
    if (arrivalTime + delayedTime === 24) {
        return 0;
    }
    
    return arrivalTime + delayedTime > 24 ? arrivalTime + delayedTime - 24 : arrivalTime + delayedTime;
};