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

console.log(countLetters("happy birthday to you"));
