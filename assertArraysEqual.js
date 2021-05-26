
const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let element of array1) {
    if (array1[element] !== array2[element]) {
      return false;
    }
  }
  return true;
};

//define a function which, when called, will utilize eqArrays to compare two arrays
//console.log assertion messages in pass or fail scenarios, respectivly

//define a function which takes two parameters
const assertArraysEqual = function (arg1, arg2) {
  //call eq arrays with the two passed in args
  if (eqArrays(arg1, arg2) !== true) {
    //if eqArrays returns false, log assertions message
    return `‼️‼️‼️ Assertion Failed! ${arg1} !== ${arg2} ‼️‼️‼️‼️`;
  }
  //call eq arrays with the two passed in args
  if (eqArrays(arg1, arg2) === true) {
    //if eqArrays returns true, log assertions message
  }
  return `👍👍👍 Assertion Passed! ${arg1} === ${arg2}👍👍👍`;
};

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArraysEqual([1, 2, 3], [1, 2, 4]));
