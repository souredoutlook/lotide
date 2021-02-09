const without = function(source, itemsToRemove) {
  const newArray = [];
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

module.exports = without;
