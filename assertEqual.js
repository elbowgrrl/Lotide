//A function which takes two arguments (primitive data types) and tests if they are the same
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

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(true, true);
assertEqual(true, "true");
assertEqual(0, null);
