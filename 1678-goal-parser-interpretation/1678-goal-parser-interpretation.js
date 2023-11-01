/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let string = "";
    
    for (let i = 0; i < command.length; i++) {
        if (command[i] === "G") {
            string += "G"
        } else if (command[i] === "(") {
            if (command[i + 1] === ")") {
                string += "o";
                i++;
            } else {
                string += "al";
                i++;
            }
        }
    }
    
    return string;
};