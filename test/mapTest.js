const {expect} = require('chai')
const map = require('../map');

describe("#map",()=>{
  it("it should return  ['g', 'c', 't', 'm', 't' ] when test =['ground', 'control', 'to', 'major', 'tom'] and word => word[0]", ()=>{
    const words = ["ground", "control", "to", "major", "tom"];
    expect(map(words, word => word[0])).to.deep.equal([ 'g', 'c', 't', 'm', 't' ]);
  })

  it("it should return  [2,4,6] when test = [1,2,3] and x => x * 2", ()=>{
    const test = [1,2,3];
    expect(map(test, x => x * 2)).to.deep.equal([2,4,6]);
  })

  it("it should return  [1,2] when test = [1,2,3] and (x) => { if (x<3){return x}", ()=>{
    const test = [1,2,3];
    expect(map(test, (x)=> {
      if (x<3){
        return x
      }
    })).to.deep.equal([1,2]);
  })
});
