/**
 * @param {number} n
 * @return {number}
 */
// var fib = function(n) {
//     if (n <= 1) {
//         return n;
//     } 
    
//     return fib(n - 1) + fib(n - 2);
// };

const cache = {0: 0, 1: 1};

const fib = (n) => {
    if (n === 0 || n === 1) {
      return cache[n];
    }
    
    if (!cache[n]) {
      cache[n] = fib(n - 1) + fib(n - 2);
    }

    return cache[n];
};