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

const letterPositions = function(sentence) {
  const results = {};
  if (typeof sentence === "string") {
    for (let i = 0; i < sentence.length; i++) {
      let charCode = sentence.toLowerCase().charCodeAt(sentence[i]);
      if (charCode >= 97  && charCode <= 122) {
        results[sentence[i].toLowerCase()] !== undefined ? results[sentence[i].toLowerCase()].push(i) : results[sentence[i].toLowerCase()] = [i];
      }
    }
  }
  return results;
};

// TEST CODE


// let test = letterPositions("a");
// assertArraysEqual(test['a'], [0]);
