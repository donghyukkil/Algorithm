/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    const arr = s.split(" ");
    let result = [];
    
    arr.sort((a,b) => Number(a[a.length - 1]) - Number(b[b.length - 1]));
    
    for (let i = 0; i < arr.length; i++) {
        let element = "";
        
        for (let j = 0; j < arr[i].length - 1; j++) {
            element += arr[i][j];
        }

        result.push(element);
    }
    
    return result.join(" ");
};

