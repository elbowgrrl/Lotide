const assert = require("chai").assert;
const countLetters = require("../countLetters");

describe("#countLetters", () => {

  it("returns { h: 1, i: 1 } when passed 'hi'", () => {
    assert.deepEqual(countLetters("hi"), { h: 1, i: 1 })
  });

  it("returns  {m: 1, u: 1, s: 2, i: 3, c: 1, ' ': 2, l: 1, f: 1, e: 1 } when passed 'music is life' ", () => {
    assert.deepEqual(countLetters("music is life"), { m: 1, u: 1, s: 2, i: 3, c: 1, ' ': 2, l: 1, f: 1, e: 1 })
  });

  it("returns an object when passed a string", () => {
    assert.deepEqual(countLetters("Happy Birthday to you"), 
    {
      H: 1,
      a: 2,
      p: 2,
      y: 3,
      ' ': 3,
      B: 1,
      i: 1,
      r: 1,
      t: 2,
      h: 1,
      d: 1,
      o: 2,
      u: 1
    }
    )});

});