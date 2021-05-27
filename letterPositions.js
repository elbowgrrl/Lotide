const letterPositions = function (sentence) {
  const results = {};
  // iterate over the string
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  //push the index into the array at the key of the letter

  return results;
};

console.log(letterPositions("happy birthday to you"));
