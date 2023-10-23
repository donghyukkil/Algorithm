/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    const result = [];
    
    for (let i = 0; i < address.length; i++) {
        if (address[i] === ".") {
            result.push("[.]");
            
            continue;
        }
        
        result.push(address[i]);
    }
    
    return result.join("");
};

