const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(item);
    if (callback(item)) {
      results.pop();
      break;
    }
  }
  return results;
};

module.exports = takeUntil;

//TEST CODE:
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// console.log('---');

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// const eqArrays = function(array1,array2) {
//   if (array1.length !== array2.length) {
//     return false;
//   }
//   for(let i = 0; i < array1.length; i++) {
//      if (array1[i] !== array2[i]) {
//        return false;
//      }
//    }
//    return true;
// };

// const assertArraysEqual = function(array1,array2) {
//   const returnBoolean = eqArrays(array1,array2);
//   if (returnBoolean) {
//     console.log(`✅ Assertion Passed: ${array1} === ${array2}`);
//   } else {
//     console.log(`🛑 Assertion Failed: ${array1} !== ${array2}`);
//   }
// };
// assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ]);
// assertArraysEqual(results2,["I've", "been", "to", "Hollywood"]);