//define a function which takes in two arrays and compares them to each other. 
//returns true if arrays are identical and false if arrays are different

const eqArrays = function(array1, array2) {
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

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(
      `‼️‼️‼️ Assertion Failed! ${actual} !== ${expected} ‼️‼️‼️‼️`
    );
    return;
  }

  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed! ${actual} === ${expected}👍👍👍`);
    return;
  }
};

//Test code for eqArrays 
// console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

//Test code for assertEqual
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS