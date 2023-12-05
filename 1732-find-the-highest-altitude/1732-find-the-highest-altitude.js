// /**
//  * @param {number[]} gain
//  * @return {number}
//  */
// var largestAltitude = function(gain) {
//     let startAltitude = 0;
//     const array = [];
    
//     array.push(startAltitude);
    
//     for (let i = 0; i < gain.length; i++) {
//         startAltitude += gain[i];
        
//         array.push(startAltitude);
//     }
    
//     return Math.max(...array);
// };

const largestAltitude = function (gain) {
    let resultAltitude = 0;
    let highestAltitude = gain[0];
    let answer;
    
    for (let i = 0; i < gain.length; i++) {
        resultAltitude += gain[i];
        
        if (resultAltitude > highestAltitude) {
             highestAltitude = resultAltitude
        }
    }
    
    return highestAltitude > 0 ? highestAltitude : 0;
};