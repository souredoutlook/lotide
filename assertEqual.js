//assertEqual.js
const passEmoji = String.fromCodePoint(0x1F49A);
const failEmoji = String.fromCodePoint(0x1F198);

const checkType = function(value) {
  let returnedValue = '';
  if (typeof(value) === "string") {
    returnedValue = `"${value}"`;
    return returnedValue;
  } else if (value instanceof Array) {
    returnedValue = `[ `;
    for (let i = 0; i < value.length - 1; i++) {
      if (typeof(value[i]) === "string") {
        returnedValue += `'${value[i]}', `;
      } else {
        returnedValue += `${value[i]}, `;
      }
    }
    if (typeof(value[value.length - 1]) === "string") {
      returnedValue += `'${value[value.length - 1]}' ]`;
    } else {
      returnedValue += `${value[value.length - 1]} ]`;
    }
    return returnedValue;
  }
  return value;
};

const assertEqual = function(actual, expected) {
  actual = checkType(actual);
  expected = checkType(expected);
  if (actual === expected) {
    console.log(`${passEmoji}${passEmoji}${passEmoji} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${failEmoji}${failEmoji}${failEmoji} Assertion Failed: ${actual} !== ${expected}`);
  }
};


module.exports = assertEqual;


