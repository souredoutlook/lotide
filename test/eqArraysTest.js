const eqArrays = require('../eqArrays');
const {assert} = require('chai');
// TEST CODE
describe("#eqArrays",()=>{
  it("it should return true when both arguments are [1,2,3]", ()=>{
    assert.equal(eqArrays([1, 2, 3], [1, 2, 3]), true);//
  });

  it("it should return false when the arguments are [1,2,3] and [3,2,1]", ()=>{
    assert.equal(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });

  it("it should return true when both arguments are ['1','2','3']",()=>{
    assert.equal(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });

  it('it should return false when the arguments are ["1", "2", "3"] and  ["1", "2", 3]', ()=>{
    assert.equal(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });

  it('it should return false when the arguments are [] and ["1", "2", 3])', ()=>{
    assert.equal(eqArrays([], ["1", "2", 3]), false);
  });

  it('it should return true when both arguments are []', ()=>{
    assert.equal(eqArrays([], []), true);
  });
});
// assert.equal(eqArrays([1, 2, 3], [1, 2, 3]), true);// => true
// assert.equal(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

// assert.equal(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);// => true
// assert.equal(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
// assert.equal(eqArrays([], ["1", "2", 3]), false);
// assert.equal(eqArrays([], []), true);