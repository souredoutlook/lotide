const {assert, expect} = require('chai');
const countOnly = require('../countOnly');

describe("#countOnly", ()=> {
  it('it should return 1 to output["Jason"] when {"Jason": true}', ()=>{
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const output = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    expect(output["Jason"]).to.equal(1);
  });

  it('output["Karima"] should be undefined when {"Karima": true}', ()=>{
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const output = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    expect(output["Karima"]).to.equal(undefined)
  });

  it('it should return 2 to output["Fang"] when {"Fang": true}', ()=>{
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const output = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    expect(output["Fang"]).to.equal(2);
  });

  it('output["Agouhanna"] should be undefined when {"Agouhanna": false}', ()=>{
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const output = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    expect(output["Agouhanna"]).to.equal(undefined)
  });

});
