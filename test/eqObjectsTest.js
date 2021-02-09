const {assert} = require('chai');
const eqObjects = require('../eqObjects');

describe('#eqObject', ()=>{
  it('it should return true if ab = { a: "1", b: "2"} and ba = { b: "2", a: "1"}', ()=> {
    const ab = { a: "1", b: "2"};
    const ba = { b: "2", a: "1"};
    assert.equal(eqObjects(ab,ba), true);
  });

  it('it should return false if ab = { a: "1", b: "2"} and abc = { a: "1", b: "2", c: "3"}', ()=> {
    const ab = { a: "1", b: "2"};
    const abc = { a: "1", b: "2", c: "3"};
    assert.equal(eqObjects(ab,abc), false);
  });

  it('it should return true if cd = { c: "1", d: ["2", 3] } and dc = { d: ["2", 3], c: "1" }', ()=> {
    
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.equal(eqObjects(cd,dc), true);
  });

  it('it should return false if cd = { c: "1", d: ["2", 3] } and cd2 = { c: "1", d: ["2", 3, 4] }', ()=> {
    
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    assert.equal(eqObjects(cd,cd2), false);
  });

});