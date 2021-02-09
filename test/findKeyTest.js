const {expect} = require('chai');
const findKey = require('../findKey');

describe("#findKey",()=>{
  it('it should return "noma" when {"noma": { stars: 2 }} and x => x.stars === 2', ()=>{
    const testObject = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    expect(findKey(testObject, x => x.stars === 2)).to.equal("noma");
  });

  it('it should return "three" when {three: 3} and x => typeof x === "number"', ()=>{
    const testObject = {
      one: 'one',
      two: 'two',
      three: 3,
      four: 4
    };
    expect(findKey(testObject, x => typeof x === "number")).to.equal("three");
  });
});