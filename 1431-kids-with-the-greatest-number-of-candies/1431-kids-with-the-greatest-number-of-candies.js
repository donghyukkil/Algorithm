/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
// var kidsWithCandies = function(candies, extraCandies) {
//     const result = [];
//     const maxValue = Math.max(...candies);
    
//     for (let i = 0; i < candies.length; i++) {
//         candies[i] + extraCandies >= maxValue ? result.push(true) : result.push(false);           
//     }
    
//     return result;
// };

const kidsWithCandies = (candies, extraCandies) => {
    const max = Math.max(...candies);
    
    return candies.map(candy => candy + extraCandies >= max);
};
