const tail = function(array) {
  return  array ? array.slice(1, array.length) : undefined;
};

module.exports = tail;


