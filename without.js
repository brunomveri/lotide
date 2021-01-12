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

// // test and use functions
// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([1, 2, 3], [3, 2, 1]);
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);

// const without = function(source,itemsToRemove) {
//   let newArr = [];

//   for (let i = 0; i < source.length; i++) {
//      for (let j = 0; j < itemsToRemove.length; j++) {
//        if (source[i] === itemsToRemove[j]) {
//          //console.log(itemsToRemove[i]);
//          source.splice(i,1);
//        }
//     }
//   }

//   return source;
// };

const without = function (arr1, arr2) {
  let newArr = [];
  outer: for (let i = 0; i < arr1.length; i++) {
    inner: for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        j = 0;
        continue outer;
      }
    }
    newArr.push(arr1[i]);
  }
  return newArr;
};

//TEST CODE:

// console.log(without([1, 2, 3], [1])); // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);