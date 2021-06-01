const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue");

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

describe("#findKeyByValue", () => {

it("returns the key in an object when passed the value at that key", () => {
  assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama")
});

it("returns the key in an object when passed the value at that key", () => {
  assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi")
});

});