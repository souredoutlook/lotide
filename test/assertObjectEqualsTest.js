const assertObjectEquals = require('../assertObjectEquals');

const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1"};
assertObjectEquals(ab,ba);

const abc = { a: "1", b: "2", c: "3"};
assertObjectEquals(ab, abc); // false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectEquals(cd, dc); //true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectEquals(cd, cd2); //false