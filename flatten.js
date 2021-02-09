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

module.exports = flatten;
