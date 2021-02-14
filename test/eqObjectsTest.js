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

describe("#eqObjectsRecursive", ()=>{
  it("should return true when { a: { z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 }", ()=>{
    assert.equal(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  })

  it("should return false when { a: { y: 0, z: 1 }, b: 2 } and  { a: { z: 1 }, b: 2 }",()=>{
    assert.equal(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  })

  it("should return false when { a: { y: 0, z: 1 }, b: 2 } and { a: 1, b: 2 }", ()=>{
    assert.equal(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
  })

  it("we need to go deeper... returns false if  { a: { y: 0, z: {i: 1, j: 2} }, b: 2 } and { a: { y: 0, z: {i: 1, j: 0} }, b: 2 }", ()=>{
    assert.equal(eqObjects({ a: { y: 0, z: {i: 1, j: 2} }, b: 2 }, { a: { y: 0, z: {i: 1, j: 0} }, b: 2 }), false);
  })

  it("troll in the dungeons! returns true if  { a: { y: 0, z: {i: 1, j: {troll: 'in the dungeon'}} }, b: 2 } and { a: { y: 0, z: {i: 1, j: {troll: 'in the dungeon'}} }, b: 2 }", ()=>{
    assert.equal(eqObjects({ a: { y: 0, z: {i: 1, j: {troll: 'in the dungeon'}} }, b: 2 },{ a: { y: 0, z: {i: 1, j: {troll: 'in the dungeon'}} }, b: 2 }), true);
  })
})