//define a function that scans an object and returns the key at the provided value

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

module.exports = findKeyByValue;
