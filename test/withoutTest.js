const {expect} = require('chai');
const without = require('../without');

describe("#without", ()=>{
  it("it should return [2,3] when [1,2,3], [1]",()=>{
    expect(without([1,2,3], [1])).to.deep.equal([2,3]);
  });

  it("it should return ['1','2'] when ['1', '2', '3'], [1, 2, '3']",()=>{
    expect(without(['1', '2', '3'], [1, 2, '3'])).to.deep.equal(['1','2']);
  });
});