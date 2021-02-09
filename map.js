// map.js

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    let result = callback(item);
    if (result !== undefined) {
      results.push(result);
    }
  }
  return results;
};

module.exports = map;
