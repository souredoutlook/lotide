const middle = function(wholeArray) {
  if (Array.isArray(wholeArray)) {
    if (wholeArray.length > 2){
      let middle = (wholeArray.length % 2)  === 0 ?  [wholeArray[Math.floor((wholeArray.length - 1) / 2)], wholeArray[Math.ceil((wholeArray.length - 1)/ 2)]] : [wholeArray[[Math.floor((wholeArray.length - 1) / 2)]]];
      return middle;
    } else {
      return [];
    }
  }
};

module.exports = middle;