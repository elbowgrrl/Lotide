const eqObjects = require('./eqObjects');
//utilizes util library's inspect function

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (!eqObjects(object1, object2)) {
    console.log(`‼️‼️‼️ Assertion Failed! ${inspect(object1)} !== ${inspect(object2)} ‼️‼️‼️‼️`);
  };
  if (eqObjects(object1, object2)) {
    console.log(`👍👍👍 Assertion Passed! ${inspect(object1)} === ${inspect(object2)}👍👍👍`);
  };
};


assertObjectsEqual({ a: '1', b: 2 }, { a: '1', b: 2 })
assertObjectsEqual({ a: '1', b: 2 }, { a: '1', b: 3 })

module.exports = assertObjectsEqual;