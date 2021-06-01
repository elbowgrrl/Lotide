
const eqArrays = require('./eqArrays');

//define a function which, when called, will utilize eqArrays to compare two arrays
//console.log assertion messages in pass or fail scenarios, respectivly

//define a function which takes two parameters
const assertArraysEqual = function (arg1, arg2) {
  //call eq arrays with the two passed in args
  if (eqArrays(arg1, arg2) !== true) {
    //if eqArrays returns false, log assertions message
    console.log( `‼️‼️‼️ Assertion Failed! ${arg1} !== ${arg2} ‼️‼️‼️‼️`);
  }
  //call eq arrays with the two passed in args
  if (eqArrays(arg1, arg2) === true) {
    //if eqArrays returns true, log assertions message
  }
  console.log(`👍👍👍 Assertion Passed! ${arg1} === ${arg2}👍👍👍`);
};


module.exports = assertArraysEqual
