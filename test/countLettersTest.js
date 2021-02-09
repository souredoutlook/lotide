const {assert} = require('chai')
const countLetters = require('../countLetters')
describe('#countLetters', ()=> {
  it('it should return 2 top ouput["l"]', ()=>{
    let count = countLetters('LHL');
    assert.equal(count["l"], 2);
  });
});

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual("Foo", "Foo");
// assertEqual(1, 1);
// assertEqual(1, 2);
// assertEqual(true, true);
// assertEqual(true, false);
// assertEqual(1, "Foo");
// assertEqual("1", "Foo");