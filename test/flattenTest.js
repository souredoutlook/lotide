const {assert} = require('chai');
const flatten = require('../flatten');

describe("#flatten", ()=>{
  it('it return [1,2,3,4] if [1,[2,3],4]', ()=>{
    assert.deepEqual(flatten([1,[2,3],4]), [1,2,3,4]);
  });
});
