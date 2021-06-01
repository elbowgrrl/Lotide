//define a function which compares two objects. If the objects are identical, it returns true.
//Otherwise. it returns false.

const eqArrays = require('./eqArrays');

const eqObjects = function (obj1, obj2) {
  //determine if objects have same amount of keys
  const arr1 = Object.keys(obj1);
  const arr2 = Object.keys(obj2);
  if (arr1.length !== arr2.length) {
    return false;
  }
  //loop over object
  for (const key in obj1) {
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
    //compare keys and values
  }
  return true;
};

module.exports = eqObjects;
