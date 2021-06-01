const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {

  it("returns [5] when passed [1, 2, 3, 4, 5, 6, 7, 8, 9]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5])
  });

  it("returns [7, 9] when passed [1, 22, 45, 7, 9, 10, 13, 27]", () => {
    assert.deepEqual(middle([1, 22, 45, 7, 9, 10, 13, 27]), [7, 9])
  });

  it("returns [tree, moss] when passed ['flower', 'bug', 'tree', 'moss', 'moth', 'leaf']", () => {
    assert.deepEqual(middle(['flower', 'bug', 'tree', 'moss', 'moth', 'leaf']), ['tree', 'moss'])
  });

  it("returns ['angry'] when passed ['happy', 'sad', 'angry', 'elated', 'squirley']", () => {
    assert.deepEqual(middle(['happy', 'sad', 'angry', 'elated', 'squirley']), ['angry'])
  });

});
