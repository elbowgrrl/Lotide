//define a function that scans an object and returns the key at the provided value

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

const findKeyByValue = function (object, value) {
  let returnVal = undefined;
  //create array of keys
  keyArray = Object.keys(object);
  //iterate over object
  for (const key in object) {
    if (object[key] === value) {
      returnVal =  key;
    }
  }
  return returnVal;
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"));
console.log(findKeyByValue(bestTVShowsByGenre, "string"));

module.exports = findKeyByValue;
