const passEmoji = String.fromCodePoint(0x1F49A);
const failEmoji = String.fromCodePoint(0x1F198);

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`${passEmoji}${passEmoji}${passEmoji} Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`${failEmoji}${failEmoji}${failEmoji} Assertion Failed: [${actual}] !== [${expected}]`);
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


// Our map function will take in two arguments:

//     An array to map
//     A callback function

// The map function will return a new array based on the results of the callback function.

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//TEST CODE

// const words = ["ground", "control", "to", "major", "tom"];
// assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);

