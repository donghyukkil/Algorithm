/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
  const toBe = (param) => {
      if (param === val) {
          return true;
      }
      
      if (!param) {
       throw new Error ("Not Equal");
      }
      
      if (!param.length) {
       throw new Error ("Not Equal");
      }
      
      if (param !== val) {
        throw new Error ("Not Equal");
      }
  };
    
  const notToBe = (param) => {
      if (param !== val) {
          return true;
      }
      
      if (!param.length) {
       throw new Error ("Equal");
      }
      
      if (param === val) {
        throw new Error ("Equal");  
      }
  };
    
  return {
      toBe,
      notToBe,
  }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */