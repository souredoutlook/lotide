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

// Implement the function findKeyByValue
const findKeyByValue = function(object, value) {
  // which takes in an object and a value.
  for (let key of Object.keys(object)) {
    //  It should scan the object and find the first key which contains the given value.
    if (object[key] === value) {
      return key;
      //  return the first key which contains the given value.
    }
  }
  return undefined;
  // >>>>>>>If no key with that given value is found, then it should return undefined.
};

// TEST CODE
// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);