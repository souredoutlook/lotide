const tail = require('../tail');
const assertEqual = require('../assertEqual');

// TEST CODE

console.log(tail());

console.log(tail([]));

const words = ['Yo Yo', "Lighthouse", "Labs"];
console.log(tail(words));
assertEqual(words.length, 3);

console.log(tail(["Hello", "Lighthouse", "Labs"]));
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);

assertEqual(tail([1, 2, 3]), [2, 3]);
assertEqual(tail([1, 2, 3]), [1, 2, 3]);
