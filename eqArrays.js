
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


//Test code for eqArrays 
// console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

module.exports = eqArrays;