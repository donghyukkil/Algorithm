/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];

    if (s.length === 1) {
        return false;
    }
    
    for (let x of s) {
        if (x === "(" || x === "[" || x === "{") {
            stack.push(x);
        } else {
            if (!stack.length) {
                return false;
            }
            let top = stack[stack.length - 1];
            if ((x === ")" && top === "(") || 
                (x === "]" && top === "[") || 
                (x === "}" && top === "{")) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    
    return stack.length === 0;
};