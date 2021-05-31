// const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail')


assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4])

//TEST CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];
assertArraysEqual(tail(words), [ "Lighthouse", "Labs" ]);
assertArraysEqual(tail([1, 2, 3, 4]), [2, 3, 4])
//Edge cases
assertArraysEqual(tail([1]), []);
assertArraysEqual(tail([]), []);