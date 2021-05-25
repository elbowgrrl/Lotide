//A function which takes an array and returns the first item of the array
const head = function(array) {
  return array[0];
};

//Testing function
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

//TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);
