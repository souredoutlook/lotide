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
    console.log(`${passEmoji}${passEmoji}${passEmoji} Assertion Passed: `, actual, ' === ', expected);
  } else {
    console.log(`${failEmoji}${failEmoji}${failEmoji} Assertion Failed: `,actual, ' !== ', expected);
  }
};


// Implement the function findKey
// which takes in an object and a callback.
const findKey = function(object, callback) {
// It should scan the object and
  for (let key of Object.keys(object)) {
  // find the first key for which the callback returns a truthy value.
    if (callback(object[key])) {
      return key;
      //  return the first key for which the callback returns a truthy value.
    }
  }
  // If no key is found, then it should return undefined.
  return undefined;
};

// TEST CODE

// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2), "noma");

// assertEqual(findKey({
//   one: 'one',
//   two: 'two',
//   three: 3,
//   four: 4
// }, x => typeof x === "number"), "three")