const passEmoji = String.fromCodePoint(0x1F49A);
const failEmoji = String.fromCodePoint(0x1F198);

const assertEqual = function(actual, expected) {
  if (typeof(actual) === "string") {
    actual = `"${actual}"`;
  }
  if (typeof(expected) === "string") {
    expected = `"${expected}"`;
  }
  if (actual === expected) {
    console.log(`${passEmoji}${passEmoji}${passEmoji} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${failEmoji}${failEmoji}${failEmoji} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++){
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

// TEST CODE

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);// => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);// => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
// assertEqual(eqArrays([], ["1", "2", 3]), false);
// assertEqual(eqArrays([], []), true);