const { assert } = require('chai');
const assertEqual = require('../assertEqual');
const head = require('../head');

// // TEST CODE

describe("#head", ()=> {
  it("returns 5 for [5,6,7]", ()=> {
    assert.strictEqual(head([5,6,7]), 5);
  });

  it("returns 'Helllo' for ['Hello', 'Lighthouse', 'Labs']", ()=>{
    assert.strictEqual(head(['5']),'5');
  });

  it("returns undefined for []", () => {
    assert.strictEqual(head([]),undefined);
  });
});