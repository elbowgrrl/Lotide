// define a function that takes an array and returns only the middle elements
//define a function that takes an array
const middle = function(array) {
//find length of array
let middle = (array.length) / 2;
//use modulo opporator to determine how many elements will be in the middle
if (!Number.isInteger(middle)) {
  //round middle down
  el1 = Math.floor(middle) -1;
  el2 = el1 + 1;
  //slice new middle, new middle plus one
  newArray = array.slice(array[el1], array[el2]);
}
//use modulo opporator to determine how many elements will be in the middle
if (Number.isInteger(middle)) {
  //use .slice() method to remove desired elements
  newArray = array.slice(array[middle - 2], array[middle]);
}
//return new array
return newArray;
};


console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]))


