const words = ["flower", "dance", "absorb", "drink", "clap", "jump"]
const numbers = [3, 5, 7, 1, 9, 11, 13];

//impliment a function which iterates over an array and pushes items into a
//new array until the callbacl function returns a truthy value

const takeUntil = function (array, cb) {
  const newArray = [];
  //iterate over array
  for (let i = 0; i < array.length; i++) {
    //call callback on each element
    if (!cb(array[i])) {
      //if callback does not evaluate to true, push element into new array
      newArray.push(array[i]);
    }
    //if cb evaluates to true, return the Array
    if (cb(array[i])) {
      return newArray;
    }
  }
  return newArray;
};

// //One Liner Solution
// const takeUntil = (array, callback) => array.slice(0, array.findIndex(callback))


console.log(takeUntil(numbers, (x) => x < 2));
console.log(takeUntil(words, word => word === "absorb"));

