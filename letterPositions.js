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
{
  h: [ 0, 10 ],
  a: [ 1, 12 ],
  p: [ 2, 3 ],
  y: [ 4, 13, 18 ],
  ' ': [ 5, 14, 17 ],
  b: [ 6 ],
  i: [ 7 ],
  r: [ 8 ],
  t: [ 9, 15 ],
  d: [ 11 ],
  o: [ 16, 19 ],
  u: [ 20 ]
}

console.log(letterPositions())
module.exports = letterPositions;
