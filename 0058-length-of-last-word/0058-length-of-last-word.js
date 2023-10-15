/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const arr = [...s.trim()].join("");

    return arr.slice(arr.lastIndexOf(" ") + 1).length
};