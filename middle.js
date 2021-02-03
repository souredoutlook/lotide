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

const middle = function(wholeArray) {
  if (Array.isArray(wholeArray)) {
    if (wholeArray.length > 2){
      let middle = (wholeArray.length % 2)  === 0 ?  [wholeArray[Math.floor((wholeArray.length - 1) / 2)], wholeArray[Math.ceil((wholeArray.length - 1)/ 2)]] : [wholeArray[[Math.floor((wholeArray.length - 1) / 2)]]];
      return middle;
    } else {
      return [];
    }
  }
};
// TEST CODE

// assertArraysEqual(middle([1]),[]);
// assertArraysEqual(middle([1, 2]),[]);
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
