const { assert } = require('chai');
const middle = require('../middle')

// TEST CODE

describe("#middle", ()=>{
  it("returns [] when [1]", ()=>{
    assert.deepEqual(middle([1]),[]);
  });

  it("returns [2] when [1,2,3]", ()=>{
    assert.deepEqual(middle([1,2,3]),[2]);
  });

  it("returns [3] when [1,2,3,4,5]", ()=>{
    assert.deepEqual(middle([1,2,3,4,5]),[3]);
  });

  it("returns [2,3] when [1,2,3,4]", ()=>{
    assert.deepEqual(middle([1,2,3,4]),[2,3]);
  });

  it("returns [3,4] when [1,2,3,4,5,6]", ()=>{
    assert.deepEqual(middle([1,2,3,4,5,6]),[3,4]);
  });
});
