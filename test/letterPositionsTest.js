const {expect} = require('chai');
const letterPositions = require('../letterPositions');

describe('#flatten', ()=>{
  it('it should return {a: [0]} if "a"', ()=>{
    expect(letterPositions("a")).to.deep.equal({a: [0]});
  });
  it('it should return {a: [0,3]} if "a  a"', ()=>{
    expect(letterPositions("a  a")).to.deep.equal({a: [0,3]});
  });
});