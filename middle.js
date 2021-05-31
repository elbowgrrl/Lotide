

// define a function that takes an array and returns only the middle elements
//define a function that takes an array
const middle = function(array) {
  let newArray = [];
//find length of array
let middle = (array.length) / 2;
//use modulo opporator to determine how many elements will be in the middle
if (!Number.isInteger(middle)) {
  //round middle down
  el1 = Math.floor(middle);
  //slice new middle, new middle plus one
  newArray.push(array[el1]);
}
//use modulo opporator to determine how many elements will be in the middle
if (Number.isInteger(middle)) {
  //use .slice() method to remove desired elements
  newArray = [array[middle - 1], array[middle]];
}
//return new array
return newArray;
};

module.exports = middle;


