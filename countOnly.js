//define a function that takes an array and an object and counts how many times the 
//array property items that have a truthy value appear in the array

const countOnly = function(allItems, ItemsToCount) {
  const result = {};
  //iterate over ItemsToCount
  for (const item of allItems) {
    if (ItemsToCount[item]) {
    if (result[item]) {
      result[item] += 1;
    } else {
      result[item] = 1;
    }
  }
}
  //within the first loop, if the value at the property is true, iterate over the array

  //when iterating over the array, add a key value pair to the new object with the property name and a 1
  return result;
};

//TEST CODE

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

console.log(result1);