/**
 * @return {number}
 */
var argumentsLength = function(...args) {
  const container = [...args];

  return container.length;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */