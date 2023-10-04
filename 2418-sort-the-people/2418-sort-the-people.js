/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    const arr = [];
    
    for (let i = 0; i < names.length; i++) {
        arr.push({
            name: names[i],
            height: heights[i],
        });
    }

    arr.sort((a, b) => b.height - a.height);
    
    return arr.map(person => person.name);
};