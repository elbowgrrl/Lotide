//utilizes util library's inspect function

//Calls on this function to compare objects
const eqObjects = function (obj1, obj2) {
  const arr1 = Object.keys(obj1);
  const arr2 = Object.keys(obj2);
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (const key in obj1) {
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

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