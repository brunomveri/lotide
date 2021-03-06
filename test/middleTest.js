const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {

  it("returns [2,3] for [1, 2, 3, 4]", () => {
    const actual = middle([1, 2, 3, 4]);
    const expected = [2, 3];
    assert.deepEqual(actual, expected); 
  });  
  
  it("returns [2] for [1, 2, 3]", () => {
    const actual = middle([1, 2, 3]);
    const expected = [2];
    assert.deepEqual(actual, expected); 
  });

  it("returns [] for [1]", () => {
    const actual = middle([1]);
    const expected = [];
    assert.deepEqual(actual, expected); 
  });

  it("returns [] for []", () => {
    const actual = middle([]);
    const expected = [];
    assert.deepEqual(actual, expected); 
  });

});