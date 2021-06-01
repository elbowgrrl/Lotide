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

//TEST CODE

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log("true", eqObjects(cd, dc)); // => true

const cd2 = { c: '1', d: ['2', 3, 4] };
console.log("false", eqObjects(cd, cd2)); // => false

const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
const abc = { a: '1', b: '2', c: '3' };
console.log(eqObjects(ab, ba)); // => true
console.log(eqObjects(ab, abc)); // => false

module.exports = eqObjects;
