const takeUntil = function(array, f) {
  const takenArray = [];
  for (let element of array) {
    if (f(element)) {
      return takenArray;
    } else {
      takenArray.push(element);
    }
  }
};

module.exports = takeUntil;
