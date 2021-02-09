const {assert} = require('chai');
const flatten = require('../flatten');

// const flatten = function(roundArray) {
//   const flattenedArray = [];
//   if (Array.isArray(roundArray)) {
//     for (let i = 0; i < roundArray.length; i++) {
//       if (Array.isArray(roundArray[i])) {
//         for (let j = 0; j < roundArray[i].length; j++) {
//           flattenedArray.push(roundArray[i][j]);
//         }
//       } else {
//         flattenedArray.push(roundArray[i]);
//       }
//     }
//     return flattenedArray;
//   } else {
//     console.log('No array given as argument.');
//     process.exit();
//   }
// };

// module.exports = flatten;

describe("#flatten", ()=>{
  it('it return [1,2,3,4] if [1,[2,3],4]', ()=>{
    assert.deepEqual(flatten([1,[2,3],4]), [1,2,3,4]);
  });
});
