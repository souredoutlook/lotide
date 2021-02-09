const {assert} = require('chai')
const countLetters = require('../countLetters')

describe('#countLetters', ()=> {
  it('it should return 2 top ouput["l"]', ()=>{
    let count = countLetters('LHL');
    assert.equal(count["l"], 2);
  });
});
