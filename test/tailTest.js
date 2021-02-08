const { assert } = require('chai');
const tail = require('../tail');


// TEST CODE

describe("#tail", ()=> {
  it("returns undefined for no arguments", ()=> {
    assert.strictEqual(tail(), undefined);
  });

  it("returns [] for []", ()=>{
    let expectedResult = [];
    assert.deepEqual(tail([]),expectedResult);
  });

  it("tail does not alter the length of the target array", () => {
    const words = ['Yo Yo', "Lighthouse", "Labs"];
    tail(words);
    let expectedResult = 3;
    assert.strictEqual((words.length),expectedResult);
  });

  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", ()=>{
    let target = ['Hello', 'Lighthouse', 'Labs'];
    let expectedResult = ['Lighthouse', 'Labs'];
    assert.deepEqual(tail(target),expectedResult);
  });

  it("returns [2,3] for [1,2,3]", ()=>{
    let target = [1,2,3];
    let expectedResult = [2,3];
    assert.deepEqual(tail(target),expectedResult);
  });
  
});
