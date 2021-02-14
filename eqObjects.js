const eqArrays = require('./eqArrays')

const eqObjects = function(firstObject, secondObject) {
  let firstObjectKeys = Object.keys(firstObject);
  if (firstObjectKeys.length === Object.keys(secondObject).length) {
    for (let key of firstObjectKeys) {  
      if (firstObject[key] !== secondObject[key]) {
        if (firstObject[key] instanceof Object && secondObject[key] instanceof Object) { 
          if (!eqObjects(firstObject[key],secondObject[key])){
            return false;
          }
        } else if (firstObject[key] instanceof Array && secondObject[key] instanceof Array ) {
          if (!eqArrays(firstObject[key],secondObject[key])) {
            return false;
          }
        } else {
          return false;
        } 
      }
    }
    return true;
  }
  return false;
};

module.exports = eqObjects;
