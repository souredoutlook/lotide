const eqArrays = require('./eqArrays')

const eqObjects = function(firstObject, secondObject) {
  let firstObjectKeys = Object.keys(firstObject);
  if (firstObjectKeys.length === Object.keys(secondObject).length) {
    for (let key of firstObjectKeys) {
      if (firstObject[key] !== secondObject[key]) {
        if (!eqArrays(firstObject[key],secondObject[key])) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
};

module.exports = eqObjects;
// returns true or false, based on a perfect match.

// const ab = { a: "1", b: "2"};
// const ba = { b: "2", a: "1"};
// TEST CODE

// assertEqual(eqObjects(ab,ba), true);
// const abc = { a: "1", b: "2", c: "3"};
// assertEqual(eqObjects(ab, abc), false);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false
