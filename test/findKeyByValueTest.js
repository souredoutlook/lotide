const {assert} = require('chai');
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", ()=>{
  it('it should return "drama" when testObject = {drama: "The Wire"}',()=>{
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it('it should return undefined when testObject does not include a key with the value "That 70s Show"',()=>{
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.equal(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});
