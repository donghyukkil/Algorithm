/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if (!Array.isArray(obj)) {
        return Object.keys(obj).length > 0 ? false : true;
    }
    
    return obj.length > 0 ? false : true;
};