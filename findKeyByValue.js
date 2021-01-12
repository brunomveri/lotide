const findKeyByValue = function(object,value) {
  let keysArr = Object.keys(object);
  for (let key of keysArr) {
    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;


//TEST CODE:
// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire")); 
// console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));
// console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"));
// console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"));

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);