const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++){
      if (array1[i] !== array2[i]) {
        if (array1[i] instanceof Array && array2[i] instanceof Array){
          if (!eqArrays(array1[i], array2[i])) {
            return false
          }
        } else {
          return false;
        }
      }
    }
    return true;
  }
  return false;
};

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])); // => true

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])); // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // => false


module.exports = eqArrays;
