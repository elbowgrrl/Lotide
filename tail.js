//A function which takes an array and returns a new array without the first element

const tail = function(array) {
  let newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
};

console.log(tail(["Yo Yo", "Lighthouse", "Labs"]))

//one liner solution
// const tail = array => { return array.slice(1) };

module.exports = tail;