const assert = require('chai').assert;
const letterPositions   = require('../letterPositions');

describe("#letterPositions", () => {

  it("returns an object when passed a string", () => {
    assert.deepEqual(letterPositions("a man a plan a canal panama"), 
    {
      a: [
         0,  3,  6, 10, 13,
        16, 18, 22, 24, 26
      ],
      ' ': [ 1, 5, 7, 12, 14, 20 ],
      m: [ 2, 25 ],
      n: [ 4, 11, 17, 23 ],
      p: [ 8, 21 ],
      l: [ 9, 19 ],
      c: [ 15 ]
    }
    )});

    it("returns an object when passed a string", () => {
      assert.deepEqual(letterPositions("tiptoe through tulips"), 
      {
        t: [ 0, 3, 7, 15 ],
        i: [ 1, 18 ],
        p: [ 2, 19 ],
        o: [ 4, 10 ],
        e: [ 5 ],
        ' ': [ 6, 14 ],
        h: [ 8, 13 ],
        r: [ 9 ],
        u: [ 11, 16 ],
        g: [ 12 ],
        l: [ 17 ],
        s: [ 20 ]
        }
      )});

      it("returns an object when passed a string", () => {
    assert.deepEqual(letterPositions("happy birthday to you"), 
    {
      h: [ 0, 10 ],
      a: [ 1, 12 ],
      p: [ 2, 3 ],
      y: [ 4, 13, 18 ],
      ' ': [ 5, 14, 17 ],
      b: [ 6 ],
      i: [ 7 ],
      r: [ 8 ],
      t: [ 9, 15 ],
      d: [ 11 ],
      o: [ 16, 19 ],
      u: [ 20 ]
    }
    )});

});