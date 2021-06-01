
const assert = require('chai').assert;
const tail   = require('../tail');

//TEST CODE
describe("#tail", () => {

  it("returns ['bug', 'tree', 'moss', 'moth', 'leaf'] from ['flower', 'bug', 'tree', 'moss', 'moth', 'leaf']", () => {
    assert.deepEqual(tail(['flower', 'bug', 'tree', 'moss', 'moth', 'leaf']), ['bug', 'tree', 'moss', 'moth', 'leaf'])
  });

  it("returns [2, 3, 4] from [1, 2, 3, 4]", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4])
  });

  it("returns [] from [1]", () => {
    assert.deepEqual(tail([1]), [])
  });

  it("returns []from []", () => {
    assert.deepEqual(tail([]), [])
  });

});

