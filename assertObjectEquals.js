const passEmoji = String.fromCodePoint(0x1F49A);
const failEmoji = String.fromCodePoint(0x1F198);

const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual,expected)) {
    console.log(`${passEmoji}${passEmoji}${passEmoji} Assertion Passed: `, actual, ' === ', expected);
  } else {
    console.log(`${failEmoji}${failEmoji}${failEmoji} Assertion Failed: `,actual, ' !== ', expected);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

// Implement function eqObjects which will take in two objects and
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
// returns true or false, based on a perfect match.

// TEST CODE

// const ab = { a: "1", b: "2"};
// const ba = { b: "2", a: "1"};
// assertObjectsEqual(ab,ba); // true
// const abc = { a: "1", b: "2", c: "3"};
// assertObjectsEqual(ab, abc); // false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertObjectsEqual(cd, dc); //true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertObjectsEqual(cd, cd2); //false