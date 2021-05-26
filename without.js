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

const assertArraysEqual = function (arg1, arg2) {
  if (eqArrays(arg1, arg2) !== true) {
    return `‼️‼️‼️ Assertion Failed! ${arg1} !== ${arg2} ‼️‼️‼️‼️`;
  }

  if (eqArrays(arg1, arg2) === true) {
  }
  return `👍👍👍 Assertion Passed! ${arg1} === ${arg2}👍👍👍`;
};

//define a function that takes two arrays and returns the first array without any of the elements from the second array
//define a function that takes two arrays
const without = function(array1, withoutArray) {
  let newArray = [];
  //loop over the first array
  for (let i = 0; i < array1.length; i++) {
    if (!withoutArray.includes(array1[i])) {
      newArray.push(array1[i])
    }
  }
  //return the new array
  return newArray;
};

// An alternate solution
// const without = function(source, itemsToRemove) {
//   let res = [];
//   for (let element of source) {
//     let condition = false;
//     for (let item of itemsToRemove) {
//       if (element === item) {
//         condition = true;
//       }
//     }
//     if (!condition) res.push(element);
//   }
//   console.log(res);
//   return res;
// };


console.log(without([1, 2, 3, 4], [1, 3]));






