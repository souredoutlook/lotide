const eqObjects = require('./eqObjects');

const passEmoji = String.fromCodePoint(0x1F49A);
const failEmoji = String.fromCodePoint(0x1F198);

const assertObjectEquals = function(actual, expected) {
  if (eqObjects(actual,expected)) {
    console.log(`${passEmoji}${passEmoji}${passEmoji} Assertion Passed: `, actual, ' === ', expected);
  } else {
    console.log(`${failEmoji}${failEmoji}${failEmoji} Assertion Failed: `,actual, ' !== ', expected);
  }
};

module.exports = assertObjectEquals;
