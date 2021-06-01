// define a function that takes a sentance and returns a count of each letter in the string

const countLetters = function (string) {
  let result = {};
  //loop over string
  for (const letter of string) {
    // console.log("letter", letter);
    //add a key value pair to result for each time a letter appears
    if (result[letter]) {
      // console.log("fire!")
      result[letter] += 1
    } else {
      result[letter] = 1
    }
      //add 1 to the value of the letter if the letter appears again
    
  }
  //return the object
  return result;
};

module.exports = countLetters;

// console.log(countLetters("Happy Birthday to you"));

// {
//   H: 1,
//   a: 2,
//   p: 2,
//   y: 3,
//   ' ': 3,
//   B: 1,
//   i: 1,
//   r: 1,
//   t: 2,
//   h: 1,
//   d: 1,
//   o: 2,
//   u: 1
// }

// console.log(countLetters("hi"));
// { h: 1, i: 1 }

// console.log(countLetters("music is life"));
// { m: 1, u: 1, s: 2, i: 3, c: 1, ' ': 2, l: 1, f: 1, e: 1 }
