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

// The function should take in a sentence
// (as a string) and then
// count of each of the letters in that sentence.
// return a count of each of the letters in that sentence.

const countLetters = function(sentence) {
  const countedLetters = {};
  if (typeof sentence === "string") {
    for (let char of sentence) {
      let charCode = char.toLowerCase().charCodeAt(char.length - 1);
      if (charCode >= 97  && charCode <= 122) {
        countedLetters[char.toLowerCase()] !== undefined ? countedLetters[char.toLowerCase()] += 1 : countedLetters[char.toLowerCase()] = 1;
      }
    }
  }
  return countedLetters;
};

//console.log(countLetters("The quick brown fox jumps over the lazy dog" ));
// TEST CODE

// let count = countLetters('LHL');
// assertEqual(count["l"],2);

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual("Foo", "Foo");
// assertEqual(1, 1);
// assertEqual(1, 2);
// assertEqual(true, true);
// assertEqual(true, false);
// assertEqual(1, "Foo");
// assertEqual("1", "Foo");