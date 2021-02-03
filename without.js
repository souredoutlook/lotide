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

const without = function(source, itemsToRemove) {
  const newArray = [];
  //This function should take in a source array and a itemsToRemove array.
  //It should return a new array with only those elements from source that are not present in the itemsToRemove array.
  for (let i = 0; i < source.length; i++) {
    let pushSource = true;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        pushSource = false;
      }
    }
    if (pushSource) {
      newArray.push(source[i]);
    }
  }
  return newArray;
};

// TEST CODE
// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
