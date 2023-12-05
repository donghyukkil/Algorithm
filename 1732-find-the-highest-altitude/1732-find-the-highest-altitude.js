/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let startAltitude = 0;
    const array = [];
    
    array.push(startAltitude);
    
    for (let i = 0; i < gain.length; i++) {
        startAltitude += gain[i];
        
        array.push(startAltitude);
    }
    
    return Math.max(...array);
};