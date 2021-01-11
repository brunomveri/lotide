const assert = require('chai').assert;
const tail = require('../head');

describe("#tail", () => {

  it("returns [Lighthouse, Labs] for [Yo Yo, Lighthouse, Labs]", () => {
    assert.strictEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });


});



// const words = ["Yo Yo", "Lighthouse", "Labs"];
// const x = tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
