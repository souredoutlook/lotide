const {expect} = require('chai');
const takeUntil = require('../takeUntil');

describe("#takeUntil", ()=>{
  it("it should return [ 1, 2, 5, 7, 2 ] when test = 1, 2, 5, 7, 2, -1, 2, 4, 5] and x => x < 0 ", ()=>{
    let test = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    expect(takeUntil(test, x => x < 0)).to.deep.equal([ 1, 2, 5, 7, 2 ]);
  });

  it("it should return [ 'I've', 'been', 'to', 'Hollywood' ] when test = ['I've', 'been', 'to', 'Hollywood', ',', 'I've', 'been', 'to', 'Redwood'] and x => x === ','", ()=>{
    let test = ['I\'ve', 'been', 'to', 'Hollywood', ',', 'I\'ve', 'been', 'to', 'Redwood'];
    expect(takeUntil(test, x => x === ',')).to.deep.equal([ 'I\'ve', 'been', 'to', 'Hollywood' ]);
  });
});
