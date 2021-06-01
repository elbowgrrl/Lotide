// a function which works like .map
const map = (array, cb) => {
  const mappedArray = [];
  for (const index of array) {
    mappedArray.push(cb(index))
  }
  return mappedArray;
}

// //MANUAL TEST CODE
// const words = ["flower", "dance", "absorb", "drink", "clap", "jump"]
// console.log(map(words, word => { return `${word}ing`}))

module.exports = map;