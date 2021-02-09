const {expect} = require('chai');
const map = require('../map');
describe("#map",()=>{
  it("it should return  ['g', 'c', 't', 'm', 't' ] when test =['ground', 'control', 'to', 'major', 'tom'] and word => word[0]", ()=>{
    const words = ["ground", "control", "to", "major", "tom"];
    expect(map(words, word => word[0])).to.deep.equal([ 'g', 'c', 't', 'm', 't' ]);

  });
});
//TEST CODE

