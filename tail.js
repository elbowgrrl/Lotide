//A function which takes an array and returns a new array without the first element
//using a factory function
const tail = function(array) {
  return array.slice(1);
};
//not using a factory function
const tail = function(array) {
  let newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
};

// Testing function
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
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); 
assertEqual(words.length, 3); 
//Edge cases
console.log(tail([1]));
console.log(tail([]));