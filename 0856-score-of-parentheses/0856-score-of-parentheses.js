/**
 * @param {string} s
 * @return {number}
 */

// const removePairs = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === "(" && arr[i + 1] === ")") {
//             arr.splice(i, 2);
//         }
//     }
    
//     return arr;
// };
    
// var scoreOfParentheses = function(s) {
//     let score = 0;
//     let array = [...s];
    
//     while (array.length > 0) {
//         score++;
//         array = removePairs(array);
//     }
    
//     return score;
// };

var scoreOfParentheses = function(s) {
    let stack = [];
    let score = 0;

    for (let char of s) {
        if (char === '(') {
            stack.push(score);
            score = 0;
        } else {
            score = stack.pop() + Math.max(2 * score, 1);
        }
    }

    return score;
};
