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

const flatten = function(roundArray) {
  const flattenedArray = [];
  if (Array.isArray(roundArray)) {
    for (let i = 0; i < roundArray.length; i++) {
      if (Array.isArray(roundArray[i])) {
        for (let j = 0; j < roundArray[i].length; j++) {
          flattenedArray.push(roundArray[i][j]);
        }
      } else {
        flattenedArray.push(roundArray[i]);
      }
    }
    return flattenedArray;
  } else {
    console.log('No array given as argument.');
    process.exit();
  }
};
