/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    const array = title.split(" ");
        
    const result = [];
    
    
    for (let i = 0; i < array.length; i++) {
            if (array[i].length > 2) {
                result.push(array[i][array[i].indexOf(array[i][0])].toUpperCase() + array[i].slice(array[i].indexOf(array[i][0]) + 1).toLowerCase());
            } else {
                result.push(array[i].toLowerCase());
            }
    }
    
    return result.join(" ");
};