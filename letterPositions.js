const letterPositions = function(sentence) {
  const results = {};
  if (typeof sentence === "string") {
    for (let i = 0; i < sentence.length; i++) {
      // let charCode = sentence.toLowerCase().charCodeAt(sentence[i]);
      if (sentence[i].search(/[a-zA-z]/) > -1) {
      // if (charCode >= 97  && charCode <= 122) { // why doesn't this work?
        results[sentence[i].toLowerCase()] !== undefined ? results[sentence[i].toLowerCase()].push(i) : results[sentence[i].toLowerCase()] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPositions;