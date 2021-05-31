const eqArrays = require('../eqArrays');
const middle = require('../middle');

//manual test
eqArrays(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]); // 5
eqArrays(middle([1, 2, 3, 4, 6, 6, 7, 8, 8]), [6]); // 6

eqArrays(middle([1, 22, 45, 7, 9, 10, 13, 27]), [7, 9]); //[7, 9]

eqArrays(middle(['flower', 'bug', 'tree', 'moss', 'moth', 'leaf']), ['tree', 'moss']); // [tree, moss]

eqArrays(middle(['happy', 'sad', 'angry', 'elated', 'squirley']), ['angry']); // [angry]
