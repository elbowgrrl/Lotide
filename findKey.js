//a function that takes in an object and a callback and returns the
// first key for which the callback returns a truthy value

const findKey = function(object, cb) {
  for (const key in object) {
    // console.log(object[key])
    if (cb(object[key])) {
      console.log(key);
      return;
    }
  }
};


//MANUAL TEST CODE


// findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2) // => "noma"

module.exports = findKey;