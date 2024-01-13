/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {
    const array = date.split(" ");
    const year = date.slice(date.length - 4);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = months.indexOf(array[1]) + 1 > 9 ? months.indexOf(array[1]) + 1 : `0${months.indexOf(array[1]) + 1}`;
    
    let index = - 1;
    
    for (let i = 0; i < array[0].split("").length; i++) {
        if (!"0123456789".includes(array[0][i])) {
            index = i;
            
            break;
        }
    }
        
    const day = array[0].slice(0, index) > 9 ? array[0].slice(0, index) : `0${array[0].slice(0, index)}`;
    
    return `${year}-${month}-${day}`;
};