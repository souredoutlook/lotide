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

module.exports = countLetters;

