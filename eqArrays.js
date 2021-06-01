
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

module.exports = eqArrays;